import "@flaticon/flaticon-uicons/css/all/all.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="max-w-250 lg:max-w-300 mx-auto my-9 px-3">
      <h2 className="text-2xl font-medium text-gray-800">Book Categories</h2>
      <div className="flex flex-row justify-between gap-x-7  mt-5 max-md:flex-wrap max-md:justify-evenly max-md:gap-6">
        <div className="card w-[46%] h-40 flex flex-col justify-center gap-2 px-8 bg-rose-50">
          <div className="icon text-3xl max-md:text-4xl text-rose-500">
            <i className="fi fi-rr-ufo-beam"></i>
          </div>
          <div className="text-xl font-medium text-gray-800">
            Science Fiction
          </div>
          <div className="hover:underline hover:text-gray-700 transition-all duration-300 ease-in-out cursor-pointer">
            <Link to="/browsebooks/fiction">Shop Now</Link>
          </div>
        </div>
        <div className="card w-[46%] h-40 flex flex-col justify-center gap-2 px-8 bg-blue-100">
          <div className="icon text-3xl max-md:text-4xl text-blue-500">
            <i className="fi fi-rr-story-book"></i>
          </div>
          <div className="text-xl font-medium text-gray-800">Non Fiction</div>
          <div className="hover:underline hover:text-gray-700 transition-all duration-300 ease-in-out cursor-pointer">
            <Link to="/browsebooks/non-fiction">Shop Now</Link>
          </div>
        </div>
        <div className="card w-[46%] h-40 flex flex-col justify-center gap-2 px-8 bg-violet-100">
          <div className="icon text-3xl max-md:text-4xl text-violet-500">
            <i className="fi fi-rr-book-bookmark"></i>
          </div>
          <div className="text-xl font-medium text-gray-800">Documentary</div>
          <div className="hover:underline hover:text-gray-700 transition-all duration-300 ease-in-out cursor-pointer">
            <Link to="/browsebooks/documentary">Shop Now</Link>
          </div>
        </div>
        <div className="card w-[46%] h-40 flex flex-col justify-center gap-2 px-8 bg-amber-100">
          <div className="icon text-3xl max-md:text-4xl text-amber-500">
            <i className="fi fi-rs-scroll-document-story"></i>
          </div>
          <div className="text-xl font-medium text-gray-800">Literary</div>
          <div className="hover:underline hover:text-gray-700 transition-all duration-300 ease-in-out cursor-pointer">
            <Link to="/browsebooks/literary">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Category;
