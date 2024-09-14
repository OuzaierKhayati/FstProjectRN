import DrawBoard from '@/components/DrawBoard/DrawBoard';

export default function DrawPage() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-600 text-center text-white">
      <DrawBoard />
    </div>
  );
}
