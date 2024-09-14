import Loader from '@/components/common/Loader';
import { getDemo } from '@/services/demo.service';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export default function DemoPage() {
  const [throwError, setThrowError] = useState(false);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['demo', throwError],
    queryFn: () => getDemo({ throwError }),
    retry: 0,
  });

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
    </div>
  );
}
