import CollegeCard from "../../component/collegeCard/CollegeCard";
import CollegeCardSkeleton from "../../component/loadingSkeletons/CollegeCardSkeleton";
import { useGetAllCollegeQuery } from "../../redux/features/college/collegeApi";
import { useAppSelector } from "../../redux/features/hooks";
import type { TCollege } from "../../types/college.type";

const College = () => {
  const { searchTerm } = useAppSelector((state) => state.college);
  // call rtk query
  const { data: colleges, isLoading } = useGetAllCollegeQuery(searchTerm);

  return (
    <div className="bg-violet-950">
      <div className=" container mx-auto px-4 lg:px-20 pt-8 pb-12  lg:pb-20 ">
        <h1 className="text-2xl lg:text-3xl text-center text-slate-100 font-semibold">
          Explore Top Campuses
        </h1>

        {/* feature college */}
        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-3.5">
          {isLoading &&
            [...Array(3).keys()]?.map((index) => (
              <CollegeCardSkeleton key={index} />
            ))}
          {colleges?.map((college: TCollege) => (
            <CollegeCard key={college?._id} college={college} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default College;
