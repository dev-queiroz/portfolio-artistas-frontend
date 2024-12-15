import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-purple-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          NERIA KATZ
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-purple-300">
            About
          </Link>
          <Link to="/resume" className="hover:text-purple-300">
            Resume
          </Link>
          <Link to="/gallery" className="hover:text-purple-300">
            Gallery
          </Link>
          <Link
            to="/admin"
            className="bg-purple-600 px-3 py-1 rounded hover:bg-purple-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
