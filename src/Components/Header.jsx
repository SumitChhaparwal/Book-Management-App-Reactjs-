import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="mb-6">
        <nav className="w-full flex flex-row justify-center gap-x-12 py-3 border-b border-gray-300 text=md font-medium text-gray-900 ">
          <Link to="/" className="hover:text-gray-700">
            Home
          </Link>
          <Link to="/browsebooks" className="hover:text-gray-700">
            Browse Books
          </Link>
          <Link to="/addbook" className="hover:text-gray-700">
            Add Book
          </Link>
        </nav>
      </header>
    </>
  );
};
export default Header;
