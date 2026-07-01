import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Categories = ({category}) => {

  const bookArr = useSelector((store) => store.cart.bookItems);

  const {search} = useOutletContext(); 

  const filterArr = category ? bookArr.filter((item) => item.category === category) : bookArr;

  function labelColor() {
    if (category === "fiction") {
      return "text-rose-400";
    } else if (category === "non-fiction") {
      return "text-blue-400";
    } else if (category === "documentary") {
      return "text-violet-400";
    } else {
      return "text-amber-400";
    }
  }

  let labelC = labelColor();

  const finalFilteredArr = search.length ? search : filterArr;

  return (
    <>
      <div className="books mx-auto max-w-250 lg:max-w-300 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center items-center my-6">
        {finalFilteredArr.map((item) => {
          return (
            <Link to={`/bookdetails/${item.id}`} key={item.id+1}>
            <div className="mx-auto book border border-gray-300 p-6 w-65 h-110 flex flex-col justify-center gap-1.5 cursor-pointer hover:bg-gray-100 transition-all duration-500 ease-in-out max-md:w-75 mb-2 max-sm:w-90 max-sm:h-135 rounded-xl">
              <div className="img">
                <img
                  src={`${item.image}`}
                  alt="categorized_image"
                  className="w-35 max-sm:h-76 mx-auto max-sm:w-50"
                />
              </div>
              <div className={labelC ? `uppercase ${labelC} font-medium mt-2 max-sm:text-[19px]`: "uppercase text-rose-400 font-medium mt-2 max-sm:text-[19px]"}>
                {item.category}
              </div>
              <div className="titleAndsummry line-clamp-2 text-lg font-medium text-gray-800 max-sm:text-[21px]">
                {item.title}: {item.description}
              </div>
              <div className="author text-md text-gray-500 line-clamp-1 max-sm:text-[20px]">
                {item.author}
              </div>
              <div className="price text-lg font-medium max-sm:text-[21px]">
                ${item.price}
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Categories;
