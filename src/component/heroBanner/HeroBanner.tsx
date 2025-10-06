import { IoIosSearch } from "react-icons/io";

const HeroBanner = () => {
  return (
    <div className="relative text-white h-[87vh] bg-indigo-950/10 flex items-center justify-center">
      {/* banner image */}
      <img
        src="/public/images/hero-image.jpg"
        alt="College image"
        className="absolute inset-0 w-full h-full object-cover "
      />

      {/* search bare  */}
      <form className="mx-auto w-11/12 lg:w-1/2 relative">
        <input
          className="  w-full px-5 py-3.5 rounded-4xl border bg-slate-100 text-slate-800 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
          type="text"
          name="search"
          placeholder="Search college..."
        />
        <button
          type="submit"
          className="absolute right-7 top-1/2 -translate-y-1/2 text-blue-600  hover:text-blue-700  transition cursor-pointer duration-300"
        >
          <IoIosSearch className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
};

export default HeroBanner;
