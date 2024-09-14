import Loader from '@/components/common/Loader';
import { getDemo } from '@/services/demo.service';
import { socket } from '@/services/socket.service';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export default function DemoPage() {
  const [throwError, setThrowError] = useState(false);
  const [myMessage, setMyMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['demo', throwError],
    queryFn: () => getDemo({ throwError }),
    retry: 0,
  });

  useEffect(() => {
    socket.on('chat', (msg: { message: string }) => {
      setMessages((prev) => [...prev, msg.message]);
    });

    return () => {
      socket.off('chat');
    };
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-600">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <h1 className="text-3xl font-bold text-red-300">{error?.message}</h1>
      ) : (
        <h1 className="text-5xl font-bold text-white ">{data?.message}</h1>
      )}

      {/* Checkbox */}
      <div className="mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={throwError}
            onChange={(e) => setThrowError(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-blue-600"
          />
          <span className="text-white">Throw Error</span>
        </label>
      </div>

      {/* Input */}
      <div className="mt-4">
        <input
          type="text"
          placeholder="Type something..."
          className="rounded border border-gray-300 p-2 outline-none"
          onChange={(e) => setMyMessage(e.target.value)}
        />
        {/* Send button */}
        <button
          className="ml-2 rounded bg-blue-600 px-4 py-2 text-white
          disabled:cursor-not-allowed disabled:bg-gray-400"
          onClick={() => {
            socket.emit('chat', { message: myMessage });
          }}
          disabled={!myMessage}
        >
          Send
        </button>
      </div>

      {/* Messages */}
      <div className="mt-4">
        {messages.map((msg, index) => (
          <p key={index} className="text-white">
            {msg}
          </p>
        ))}
      </div>
    </div>
  );
}
