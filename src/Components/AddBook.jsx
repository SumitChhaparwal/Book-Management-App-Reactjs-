import { useRef, useState } from "react";

const AddBook = () => {
  const bCategory = useRef(null);
  const bTitle = useRef(null);
  const bAuthor = useRef(null);
  const bDesc = useRef(null);
  const bImage = useRef(null);
  const bPrice = useRef(null);
  const vailidate = useRef(null);
  const [check, setCheck] = useState(null);
  const [message, setMessage] = useState("");

  let checkout = Boolean(message);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(bCategory.current.value);
    console.log(bTitle.current.value);

    function success(msg, val) {
      checkout = true;
      setMessage(msg);
      setCheck(val);
      setTimeout(() => {
        setMessage("");
        setCheck(null);
      }, 2000);
    }

    function error(msg, val) {
      checkout = true;
      setMessage(msg);
      setCheck(val);
      setTimeout(() => {
        setMessage("");
        setCheck(null);
      }, 2000);
    }

    function handleCategory() {
      if (!bCategory.current.value.length) {
        error("Please fill out above field", false);
        return false;
      } else if (bCategory.current.value.length < 4) {
        error("Please enter complete category", false);
        return false;
      } else {
        return true;
      }
    }

    function handleTitle() {
      if (!bTitle.current.value.length) {
        error("Please fill out above field", false);
        return false;
      } else if (bTitle.current.value.length < 6) {
        error("Enter proper title of the book", false);
        return false;
      } else {
        return true;
      }
    }

    function handleAuthorName() {
      if (!bAuthor.current.value.length) {
        error("Please enter author name", false);
        return false;
      } else if (bAuthor.current.value.length < 4) {
        error("Author name must be complete", false);
        return false;
      } else if (!/^[a-zA-Z\s]+$/.test(bAuthor.current.value)) {
        error("Invalid author name..", false);
        return false;
      } else {
        return true;
      }
    }

    function handleDesc() {
      const val = bDesc.current?.value || "";
      const trimmed = val.trim();
      const wordCount = trimmed ? trimmed.split(/\s+/).length : 0;
      if (!trimmed.length) {
        error("Please enter description", false);
        return false;
      } else if (wordCount < 20) {
        error("Enter description with at least 20 words.", false);
        return false;
      } else {
        return true;
      }
    }

    function handleImg() {
      if (!bImage.current.value.length) {
        error("Please enter image address", false);
        return false;
      } else if (bImage.current.value.length < 8) {
        error("Wrong image address", false);
        return false;
      } else {
        return true;
      }
    }

    function handlePrice() {
      const val = bPrice.current?.value || "";
      const num = parseFloat(val);
      if (!val.trim().length || isNaN(num) || num <= 0) {
        error("Please enter book total price", false);
        return false;
      } else if (!/^[\d\s]+$/.test(val)) {
        error("Only digits are allowed..", false);
        return false;
      } else {
        return true;
      }
    }

    let hPrice = handlePrice();
    let hImg = handleImg();
    let hDesc = handleDesc();
    let hAuthor = handleAuthorName();
    let hTitle = handleTitle();
    let hCategory = handleCategory();
    if (hCategory && hTitle && hAuthor && hDesc && hImg && hPrice) {
      success("Form submitted successfully..", true);
    }
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center max-md:mx-2">
        <div className="title mt-6 mb-6 text-2xl">
          Fill Form to Add your Book
        </div>
        <div className="flex flex-col text-lg border-2 border-gray-300 py-11 px-9 rounded-2xl max-sm:border">
          <div className="field mb-4">
            <label htmlFor="category">
              <div className="w-28 inline-block">Category</div>
            </label>
            <input
              type="text"
              id="category"
              placeholder="Enter book category"
              className="border border-[#ccc] px-4 py-1 rounded-md"
              ref={bCategory}
              required
            />
          </div>
          <div className="field mb-4">
            <label htmlFor="title">
              <div className="w-28 inline-block">Title</div>
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter book title"
              className="border border-[#ccc] px-4 py-1 rounded-md"
              ref={bTitle}
              required
            />
          </div>
          <div className="field mb-4">
            <label htmlFor="author">
              <div className="w-28 inline-block">Author</div>
            </label>
            <input
              type="text"
              id="author"
              placeholder="Enter author name"
              className="border border-[#ccc] px-4 py-1 rounded-md"
              ref={bAuthor}
              required
            />
          </div>
          <div className="field mb-4 flex">
            <label htmlFor="desc">
              <div className="w-28 inline-block mt-1">Description</div>
            </label>
            <textarea
              name="description"
              id="desc"
              placeholder="Enter book description"
              className="border border-[#ccc] px-4 py-1 rounded-md w-full"
              ref={bDesc}
            ></textarea>
          </div>
          <div className="field mb-4">
            <label htmlFor="image">
              <div className="w-28 inline-block">Image</div>
            </label>
            <input
              type="text"
              id="image"
              placeholder="Enter image address"
              className="border border-[#ccc] px-4 py-1 rounded-md"
              ref={bImage}
              required
            />
          </div>
          <div className="field mb-6">
            <label htmlFor="price">
              <div className="w-28 inline-block">Price</div>
            </label>
            <input
              type="text"
              id="price"
              placeholder="Enter final price"
              className="border border-[#ccc] px-4 py-1 rounded-md"
              ref={bPrice}
              required
            />
          </div>
          <div className="field">
            {checkout && (
              <div
                className={`error px-3 py-1 mb-3 border ${check ? "border-green-400" : "border-red-400"}`}
              >
                {message}
              </div>
            )}
            <button
              className="border w-full bg-blue-600 text-white py-1 rounded-md cursor-pointer hover:bg-blue-500 transition-all duration-300 ease-in-out"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddBook;
