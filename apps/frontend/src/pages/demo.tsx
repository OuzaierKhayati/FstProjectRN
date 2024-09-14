<<<<<<< HEAD
import Loader from '@/components/common/Loader';
import { getDemo } from '@/services/demo.service';
import { socket } from '@/services/socket.service';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type SnakeType = {
  x: number;
  y: number;
  id: number;
};

const Snake = ({ x, y, id }: SnakeType) => {
  const size = 30;
  return (
    <div
      className="absolute flex items-center justify-center rounded-sm bg-green-500 transition-all duration-300"
      style={{
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
      }}
    >
      {id}
    </div>
  );
};

export default function DemoPage() {
  const [throwError, setThrowError] = useState(false);
  const [myMessage, setMyMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [snakes, setSnakes] = useState<SnakeType[]>([]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['demo', throwError],
    queryFn: () => getDemo({ throwError }),
    retry: 0,
  });

  useEffect(() => {
    socket.on('chat', (msg: { message: string }) => {
      setMessages((prev) => [...prev, msg.message]);
    });

    socket.on('snake', (snake: SnakeType) => {
      setSnakes((prev) => {
        // find the snake with the same id
        const index = prev.findIndex((s) => s.id === snake.id);
        // if found, update the snake
        if (index !== -1) {
          prev[index] = snake;
          return [...prev];
        } else {
          // if not found, add the snake
          return [...prev, snake];
        }
      });
    });

    return () => {
      socket.off('chat');
      socket.off('snake');
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

      {/* Snakes */}
      <div className="relative mt-5 h-[500px] w-[500px] rounded-md border-solid border-white">
        {snakes.map((snake) => (
          <Snake key={snake.id} {...snake} />
        ))}
      </div>
    </div>
  );
}
=======
import Loader from '@/components/common/Loader';
import { getDemo } from '@/services/demo.service';
import { socket } from '@/services/socket.service';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

type SnakeType = {
  x: number;
  y: number;
  id: number;
};

const Snake = ({ x, y, id }: SnakeType) => {
  const size = 30;
  return (
    <div
      className="absolute flex items-center justify-center rounded-sm bg-green-500 transition-all duration-300"
      style={{
        left: x - size / 2,
        top: y - size / 2,
        width: size,
        height: size,
      }}
    >
      {id}
    </div>
  );
};

export default function DemoPage() {
  const [throwError, setThrowError] = useState(false);
  const [myMessage, setMyMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const [snakes, setSnakes] = useState<SnakeType[]>([]);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['demo', throwError],
    queryFn: () => getDemo({ throwError }),
    retry: 0,
  });

  useEffect(() => {
    socket.on('chat', (msg: { message: string }) => {
      setMessages((prev) => [...prev, msg.message]);
    });

    socket.on('snake', (snake: SnakeType) => {
      setSnakes((prev) => {
        // find the snake with the same id
        const index = prev.findIndex((s) => s.id === snake.id);
        // if found, update the snake
        if (index !== -1) {
          prev[index] = snake;
          return [...prev];
        } else {
          // if not found, add the snake
          return [...prev, snake];
        }
      });
    });

    return () => {
      socket.off('chat');
      socket.off('snake');
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

      {/* Snakes */}
      <div className="relative mt-5 h-[500px] w-[500px] rounded-md border-solid border-white">
        {snakes.map((snake) => (
          <Snake key={snake.id} {...snake} />
        ))}
      </div>
    </div>
  );
}
>>>>>>> 4db8f8a0d138790a2c42c88d8e16d16f24e46b17
