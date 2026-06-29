const Lpage = () => {
  return (
    <div className="border-b border-[#dcdcdc] w-full mb-12 h-[50vh]  flex flex-row justify-center bg-gray-50 max-md:h-full max-md:py-10">
      <div className="container max-w-350 flex flex-row justify-center items-center mx-auto gap-6 max-md:flex-col-reverse">
        <div className="sec-1 lg:w-[50vw] w-[45vw] max-md:w-[90vw] max-md:text-center">
          <div className="label text-lg text-gray-500 uppercase font-semibold mb-3 ml-3 lg:ml-5">
            BookVault Editor's
          </div>
          <div className="title lg:text-6xl ml-3 lg:ml-5 md:text-5xl text-4xl leading-tight mb-6">
            Featured books of the year
          </div>
          <div className="btn ml-3 lg:ml-5">
            <button className="mb-3 w-35 py-2 lg:w-50 lg:py-3 text-lg text-white bg-gray-900 max-md:w-full max-md:py-3 hover:bg-gray-700 transition-all duration-300 ease-in-out cursor-pointer">
              See More
            </button>
          </div>
        </div>
        <div className="sec-2 lg:w-[50vw] w-[45vw]  max-md:w-[80vw]  max-md:mt-14 max-md:mb-3">
          <img
            className="w-175"
            src="./src/Assets/headSectionImg.png"
            alt="landing_page_image"
          />
        </div>
      </div>
    </div>
  );
};
export default Lpage;
