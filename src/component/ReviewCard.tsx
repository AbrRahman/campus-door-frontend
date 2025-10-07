import type { TReview } from "../types/review.types";
import RatingCount from "./RatingCount/RatingCount";

const ReviewCard = ({ review }: { review: TReview }) => {
  return (
    <div className="bg-violet-900 rounded-lg p-5 shadow-lg">
      <div className="flex justify-between items-center ">
        <h2 className="text-slate-100 text-xl font-semibold">{review?.name}</h2>
        <div>
          <RatingCount value={Number(review?.rating)} />
        </div>
      </div>
      <div>
        <h3 className="mt-1.5 text-base text-slate-200">
          {review?.college?.name}
        </h3>
      </div>
      <p className="text-sm my-2 text-slate-400">"{review?.comment}"</p>
      <h5 className="text-xs text-slate-400">{review?.createdAt}</h5>
    </div>
  );
};

export default ReviewCard;
