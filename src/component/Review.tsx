import type { TReview } from "../types/review.types";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const reviews = [
    {
      _id: "1",
      name: "Alice Johnson",
      college: {
        name: "Harvard University",
      },
      rating: "5",
      comment:
        "Great academic environment and amazing faculty. Truly a life-changing experience!",
      createdAt: "23 42",
    },
  ];

  return (
    <div className="bg-violet-950">
      <div className=" container mx-auto px-4 lg:px-20 pb-12 lg:pb-20">
        <h1 className="text-2xl lg:text-3xl text-center text-slate-100 font-semibold">
          Student Reviews
        </h1>
        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-3">
          {reviews?.map((review: TReview) => (
            <ReviewCard key={review?._id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
