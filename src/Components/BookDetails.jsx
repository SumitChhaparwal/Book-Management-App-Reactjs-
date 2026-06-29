import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { bookArr } from "../Utils/bookData";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookDetails = () => {
  const [count, setCount] = useState(1);

  function handlePlus() {
    setCount(count + 1);
  }

  function handleMinus() {
    setCount(count - 1);
  }

  const { id } = useParams();

  const newArr = bookArr.filter((item) => item.id == id);
  console.log(id);

  return (
    <>
      <div className="bContainer mt-20 max-w-250 flex flex-row justify-center items-start mx-auto gap-6 lg:gap-8 h-full border border-gray-300 py-6 rounded-xl shadow-md 0 max-sm:flex-col max-sm:items-center max-sm:my-10 max-sm:mx-2 max-sm:shadow-sm">
        <div className="sec1 lg:w-[25%] md:w-[25%] w-[30%] max-sm:w-[60%]">
          <img src={newArr[0].image} alt="book_image" />
        </div>
        <div className="sec2 w-[65%] max-sm:w-[75%] flex flex-col">
          <div className="title text-3xl text-gray-900">
            {newArr[0].title}: The newyork times best selling book
          </div>
          <div className="authorAndrating mt-3 flex items-center max-sm:flex-col max-sm:items-start max-sm:gap-y-3">
            <div className="rating flex gap-1 mr-5">
              <FaStar className="text-amber-400" />
              <FaStar className="text-amber-400" />
              <FaStar className="text-amber-400" />
              <FaStar className="text-amber-400" />
              <FaStar className="text-amber-400" />
            </div>
            <div className="author">
              By (author)
              <span className="text-gray-700"> {newArr[0].author}</span>
            </div>
          </div>
          <div className="price text-2xl font-medium text-gray-900 my-5 max-sm:my-4">
            ${newArr[0].price}
          </div>
          <div className="desc text-md max-sm:text-lg">
            {newArr[0].description}
          </div>
          <div className="addtocart flex flex-row  gap-6 max-sm:gap-3 mt-6 max-sm:my-6">
            <div className="pmbtn flex border border-gray-200">
              <div
                className="minus border px-5 py-3 border-gray-200 cursor-pointer hover:bg-gray-50 text-xl"
                onClick={handleMinus}
              >
                -
              </div>
              <div className="num border px-5 py-3 border-gray-200 text-lg max-sm:w-15 w-14">
                {count}
              </div>
              <div
                className="plus border px-5 py-3 border-gray-200 cursor-pointer hover:bg-gray-50 text-xl"
                onClick={handlePlus}
              >
                +
              </div>
            </div>
            <button
              type="button"
              className="text-lg bg-gray-900 text-white px-6 hover:bg-gray-800 transition-all duration-300 ease-in-out cursor-pointer max-sm:px-2"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Link to="/browsebooks">
        <div className="text-xl text-gray-500 mx-[20vw] flex justify-center items-center gap-3 mt-12 cursor-pointer hover:text-gray-700 transition-all duration-300 ease-in-out">
          <FaArrowLeft /> <div>Back to Browse</div>
        </div>
      </Link>
    </>
  );
};
export default BookDetails;
