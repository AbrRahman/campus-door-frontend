const CollegeCardSkeleton = () => {
  return (
    <div className="card bg-violet-900 shadow-sm ">
      {/* image */}
      <div className="h-50 "></div>

      <div className="card-body animate-pulse">
        {/* name */}
        <div className="w-full lg:w-4/5 h-10 rounded bg-violet-950 "></div>

        {/* admission data */}
        <div className="flex justify-between items-center">
          <div>
            <div className="h-5 w-52 rounded bg-violet-950"></div>
            <div className="h-5 rounded mt-0.5 w-52 bg-violet-950"></div>
          </div>
          <div className="w-8 h-8 bg-violet-950 rounded"></div>
        </div>
        {/* event */}
        <div className="w-18 h-7 mt-1.5 rounded bg-violet-950"></div>
        <div className="h-10  rounded mt-[1px] w-52 bg-violet-950"></div>

        {/* Research*/}
        <div className="flex justify-between items-center">
          <div>
            <div className="h-5 w-52 rounded bg-violet-950"></div>
            <div className="h-5 rounded mt-0.5 w-56 bg-violet-950"></div>
          </div>
          <div className="w-8 h-8 bg-violet-950 rounded"></div>
        </div>

        {/* details btns */}
        <div className=" h-10 mt-2 w-24 rounded bg-violet-950"></div>
      </div>
    </div>
  );
};

export default CollegeCardSkeleton;
