import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-600 text-center text-white">
      <h1 className="mb-6 text-4xl font-bold">First React Node Project</h1>
      <p className="mb-4 text-lg">
        Welcome to the home page of our first React Node project!
      </p>
      <div className="flex justify-center space-x-4">
        <Link to="/demo" className="text-blue-500 hover:underline">
          Demo
        </Link>
        <Link to="/draw" className="text-blue-500 hover:underline">
          Draw
        </Link>
      </div>
    </div>
  );
};

export default App;
