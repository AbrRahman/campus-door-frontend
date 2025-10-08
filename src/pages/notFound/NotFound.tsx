import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-violet-950 text-slate-100 px-4">
      <h1 className="text-8xl font-bold text-blue-400">404</h1>
      <h2 className="text-2xl font-semibold mt-4">Oops! Page Not Found</h2>
      {/* not found image */}
      <div className="mt-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
          alt="not found image"
          className="w-48 mx-auto drop-shadow-lg"
        />
      </div>
      {/* home btn */}
      <div className="mt-6 flex gap-4">
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-slate-100 px-6 py-2 rounded-lg shadow-lg transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
