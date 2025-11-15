import './App.css';

const App = () => {
  return (
    <div className="content">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Rsbuild with React</h1>
      <p className="text-lg text-gray-300 hover:text-white transition-colors">
        Start building amazing things with Rsbuild and Tailwind CSS.
      </p>
      <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
        <p className="text-sm text-blue-300">
          Tailwind CSS is now configured with custom colors and utilities!
        </p>
      </div>
    </div>
  );
};

export default App;
