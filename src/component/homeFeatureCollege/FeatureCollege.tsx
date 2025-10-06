import type { TCollege } from "../../types/college.type";
import CollegeCard from "../collegeCard/CollegeCard";
import CollegeCardSkeleton from "../loadingSkeletons/CollegeCardSkeleton";

const FeatureCollege = () => {
  const colleges = [
    {
      _id: "68e398bc77383db5b32ba89d",
      name: "Aetherfield University",
      admissionDates: "May 10 - July 20, 2026",
      rating: 4.8,
      researchCount: 25,
      description:
        "Aetherfield University is a leading global institute focused on innovation in technology, environmental science, and design. Its sprawling campus blends modern architecture with lush green surroundings.",
      events: [
        "TechNova Summit",
        "Global Science Expo",
        "Cultural Fusion Night",
      ],
      sports: ["Basketball", "Swimming", "Track & Field"],
      researchWorks: [
        "AI for Sustainable Agriculture",
        "Climate Resilience Modeling",
        "Autonomous Robotics Framework",
      ],
      image:
        "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759745777/college-1_ukt2kv.png",
    },
    {
      _id: "68e398bc77383db5b32ba89f",
      name: "Aetherfield University",
      admissionDates: "May 10 - July 20, 2026",
      rating: 4.8,
      researchCount: 25,
      description:
        "Aetherfield University is a leading global institute focused on innovation in technology, environmental science, and design. Its sprawling campus blends modern architecture with lush green surroundings.",
      events: [
        "TechNova Summit",
        "Global Science Expo",
        "Cultural Fusion Night",
      ],
      sports: ["Basketball", "Swimming", "Track & Field"],
      researchWorks: [
        "AI for Sustainable Agriculture",
        "Climate Resilience Modeling",
        "Autonomous Robotics Framework",
      ],
      image:
        "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759745777/college-1_ukt2kv.png",
    },
    {
      _id: "68e398bc77383db5b32ba89dd",
      name: "Aetherfield University",
      admissionDates: "May 10 - July 20, 2026",
      rating: 4.8,
      researchCount: 25,
      description:
        "Aetherfield University is a leading global institute focused on innovation in technology, environmental science, and design. Its sprawling campus blends modern architecture with lush green surroundings.",
      events: [
        "TechNova Summit",
        "Global Science Expo",
        "Cultural Fusion Night",
      ],
      sports: ["Basketball", "Swimming", "Track & Field"],
      researchWorks: [
        "AI for Sustainable Agriculture",
        "Climate Resilience Modeling",
        "Autonomous Robotics Framework",
      ],
      image:
        "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759745777/college-1_ukt2kv.png",
    },
  ];
  const isLoading = false;
  return (
    <div className="bg-violet-950">
      <div className=" container mx-auto px-4 lg:px-20 py-12 lg:py-20">
        <h1 className="text-2xl lg:text-4xl text-center text-slate-100 font-semibold">
          Explore Our Institutes
        </h1>

        {/* feature college */}
        <div className="mt-8 lg:mt-12 grid grid-cols-3 gap-3.5">
          {isLoading &&
            [...Array(3).keys()].map((index) => (
              <CollegeCardSkeleton key={index} />
            ))}
          {(colleges?.length > 3 ? colleges.slice(0, 3) : colleges).map(
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
