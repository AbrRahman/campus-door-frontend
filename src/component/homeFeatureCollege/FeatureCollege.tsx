import { useGetAllCollegeQuery } from "../../redux/features/college/collegeApi";
import type { TCollege } from "../../types/college.type";
import CollegeCard from "../collegeCard/CollegeCard";
import CollegeCardSkeleton from "../loadingSkeletons/CollegeCardSkeleton";

const FeatureCollege = () => {
  const { data: colleges, isLoading } = useGetAllCollegeQuery("");

  return (
    <div className="bg-violet-950">
      <div className=" container mx-auto px-4 lg:px-20 py-12 lg:py-20">
        <h1 className="text-2xl lg:text-3xl text-center text-slate-100 font-semibold">
          Explore Our Institutes
        </h1>

        {/* feature college */}
        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-3.5">
          {isLoading &&
            [...Array(3).keys()]?.map((index) => (
              <CollegeCardSkeleton key={index} />
            ))}
          {(colleges?.length > 3 ? colleges.slice(0, 3) : colleges)?.map(
            (college: TCollege) => (
              <CollegeCard key={college?._id} college={college} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureCollege;
