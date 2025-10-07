import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  reviewValidation,
  type TReviewInput,
} from "../../schemas/reviewValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const ReviewForm = ({ collegeId }: { collegeId: string }) => {
  const [rating, setRating] = useState(1.5);
  console.log(collegeId);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TReviewInput>({
    resolver: zodResolver(reviewValidation),
  });

  const handelReview: SubmitHandler<TReviewInput> = async (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h4 className="text-slate-100 text-2xl mb-6 font-semibold">
        Write a review
      </h4>
      <form
        onSubmit={handleSubmit(handelReview)}
        className="space-y-4 lg:space-y-6"
      >
        {/* rating star */}
        <div>
          <div
            className="rating rating-lg rating-half text-lg"
            onChange={(e) =>
              setRating(Number((e.target as HTMLInputElement).value))
            }
          >
            <input type="radio" name="rating-11" className="rating-hidden" />
            <input
              type="radio"
              name="rating-11"
              className="mask mask-star-2 mask-half-1 bg-blue-500"
              aria-label="0.5 star"
              value={0.5}
            />
            <input
              type="radio"
              name="rating-11"
              className="mask mask-star-2 mask-half-2 bg-blue-500"
              aria-label="1 star"
              value={1}
            />
            <input
              type="radio"
              name="rating-11"
              className="mask mask-star-2 mask-half-1 bg-blue-500"
              aria-label="1.5 star"
              value={1.5}
              defaultChecked={rating == 1.5}
            />
            <input
              type="radio"
              name="rating-11"
              className="mask mask-star-2 mask-half-2 bg-blue-500"
              aria-label="2 star"
              value={2}
            />
            <input
              type="radio"
              name="rating-11"
              className="mask mask-star-2 mask-half-1 bg-blue-500"
              aria-label="2.5 star"
              value={2.5}
            />
            <input
              type="radio"
              name="rating-11"
              className="mask mask-star-2 mask-half-2 bg-blue-500"
              aria-label="3 star"
              value={3}
            />
            <input
              type="radio"
              name="rating-11"
              className="mask mask-star-2 mask-half-1 bg-blue-500"
              aria-label="3.5 star"
              value={3.5}
            />
            <input
              type="radio"
              name="rating-11"
              className="mask mask-star-2 mask-half-2 bg-blue-500"
              aria-label="4 star"
              value={4}
            />
            <input
              type="radio"
              name="rating-11"
              className="mask mask-star-2 mask-half-1 bg-blue-500"
              aria-label="4.5 star"
              value={4.5}
            />
            <input
              type="radio"
              name="rating-11"
              className="mask mask-star-2 mask-half-2 bg-blue-500"
              aria-label="5 star"
              value={5}
            />
          </div>
        </div>
        {/* text input */}
        <div>
          <textarea
            {...register("comment")}
            placeholder="Write your feedback..."
            // className="bg-brand-primary w-full border-1 border-cyan-500 rounded-lg h-28 lg:h-32 focus:border-sky-50 text-sky-50 px-2.5 py-1.5"
            className="w-full  text-white border h-28 lg:h-32 border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
          ></textarea>
          <p className="text-red-500">{errors?.comment?.message}</p>
        </div>
        {/* Login btn btn */}
        <button
          type="submit"
          className="cursor-pointer select-none  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
