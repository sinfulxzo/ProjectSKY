import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          Flow<span className="text-indigo-400">OS</span>
        </Link>

        {/* Nav links */}
        <div className="flex space-x-8 text-lg font-medium">
          <Link
            to="/"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Home
          </Link>
          <Link
            to="/pricing"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Pricing
          </Link>
          <Link
            to="/features"
            className="text-gray-700 hover:text-indigo-600 transition"
          >
            Features
          </Link>
          <Link
            to="/login"
            className="bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
