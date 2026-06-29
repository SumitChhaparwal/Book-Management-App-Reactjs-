import { bookArr } from "../Utils/bookData";
import { Link } from "react-router-dom";

const PopularB = () => {
  //Container: my-9 px-6 ,subContainer: mt-5
  console.log(bookArr)
  const filteredPopularBooks = bookArr.filter((item) => item.popular === true);

  return (
    <div className="max-w-250 lg:max-w-300 my-18 px-6 mx-auto">
      <h3 className="text-2xl text-gray-800 font-medium capitalize mb-5">
        popular books
      </h3>
      <div className="books grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center items-center">
        {filteredPopularBooks.map((item) => {
          return (
            <Link to={`/bookdetails/${item.id}`}>
            <div className="mx-auto book border border-gray-300 p-6 w-65 h-110 flex flex-col justify-center gap-1.5 cursor-pointer hover:bg-gray-100 transition-all duration-500 ease-in-out max-md:w-75 mb-2 max-sm:w-90 max-sm:h-135" key={item.id}>
              <div className="img">
                <img
                  src={`${item.image}`}
                  alt={`${item.category}_image`}
                  className="w-35 max-sm:h-76 mx-auto max-sm:w-50"
                />
              </div>
              <div className="uppercase text-rose-400 font-medium mt-2 max-sm:text-[19px]">
                {item.category}
              </div>
              <div className="titleAndsummry line-clamp-2 text-lg font-medium text-gray-800 max-sm:text-[21px]">
                {item.description}
              </div>
              <div className="author text-md text-gray-500 line-clamp-1 max-sm:text-[20px]">{item.author}</div>
              <div className="price text-lg font-medium max-sm:text-[21px]">$13</div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default PopularB;
