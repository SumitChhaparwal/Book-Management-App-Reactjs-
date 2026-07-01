import { useState, useEffect } from "react";
import Categories from "./Categories";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { bookArr } from "../Utils/bookData";
import { useOutletContext } from "react-router-dom";

const BrowseBook = () => {
  const { term, setTerm, setSearch } = useOutletContext();

  const { category } = useParams();

  useEffect(() => {
    setSearch([]);
  }, [category, setSearch]);

  function handleSearch() {
    let finalArr = bookArr.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase()),
    );
    finalArr && setSearch(finalArr);
    if (finalArr.length === 0) {
      finalArr = bookArr.filter((item) => {
        return item.author.toLowerCase().includes(term.toLowerCase());
      });
      finalArr && setSearch(finalArr);
    }
    setTerm("");
  }

  return (
    <div className="w-full">
      <div className="max-w-250 lg:max-w-300 mx-auto">
        <div className="w-full box-border px-3">
          <input
            type="text"
            placeholder="Enter your query.."
            value={term}
            required
            className="border border-gray-400 mr-3 lg:mr-10 px-3 py-1 w-[75%] lg:w-[80%]"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button
            type="button"
            className="border px-3 py-1 w-[20%] lg:w-[15%] bg-gray-700 text-white hover:bg-gray-600 transition-all duration-300 ease-in-out cursor-pointer"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="mt-10 border-b-2 border-gray-100 py-3 mx-3 px-3">
          <div className="mx-2 lg:mx-4 w-[96%] categories flex justify-around">
            <div className="border border-[#ccc] px-4 py-1 max-sm:px-2 bg-rose-500 text-white cursor-pointer hover:opacity-90 overflow-x-hidden">
              <Link to="/browsebooks/fiction">Science Fiction</Link>
            </div>
            <div className="border px-4 py-1 max-sm:px-2 bg-blue-500 text-white cursor-pointer hover:opacity-90">
              <Link to="/browsebooks/non-fiction">Non Fiction</Link>
            </div>
            <div className="border px-4 py-1 max-sm:px-2 bg-violet-500 text-white cursor-pointer hover:opacity-90">
              <Link to="/browsebooks/documentary">Documentary</Link>
            </div>
            <div className="border px-4 py-1 max-sm:px-2 bg-amber-500 text-white cursor-pointer hover:opacity-90">
              <Link to="/browsebooks/literary">Literary</Link>
            </div>
          </div>
        </div>
      </div>
      <Categories category={category} />
    </div>
  );
};

export default BrowseBook;
