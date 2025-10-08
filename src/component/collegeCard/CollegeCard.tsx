import type { TCollege } from "../../types/college.type";
import { FaCalendarAlt } from "react-icons/fa";
import { MdScience } from "react-icons/md";
import { Link, useLocation } from "react-router";
import RatingCount from "../RatingCount/RatingCount";

const CollegeCard = ({ college }: { college: TCollege }) => {
  const location = useLocation();
  const from = location?.pathname;
  return (
    <div className="card bg-violet-900 shadow-sm">
      {/* college image */}
      <figure>
        <img src={college?.image} alt="college-image" />
      </figure>
      <div className="card-body">
        {/* college title */}
        <h2 className="card-title text-2xl font-semibold text-slate-100">
          {college?.name}
        </h2>
        {from == "/college" && (
          <>
            <RatingCount value={Number(college?.rating)} />
          </>
        )}
        {/* admission data */}
        <div className="text-slate-100 mt-0.5 text-sm font-semibold flex justify-between items-center">
          <div>
            <h3 className=" uppercase ">Admission Dates :</h3>
            <h3>{college?.admissionDates}</h3>
          </div>
          <FaCalendarAlt className=" size-6 font-normal" />
        </div>

        {/* events */}
        <div className="text-slate-100 mt-0.5 text-sm ">
          <h3 className=" uppercase font-semibold">Events</h3>
          <ul className="pl-5 text-slate-300">
            {(college?.events?.length > 3
              ? college?.events.slice(0, 3)
              : college?.events
            )?.map((event: string, id) => (
              <li key={id} className=" list-disc">
                {event}
              </li>
            ))}
          </ul>
        </div>
        {/* Research Highlight*/}
        <div className="text-slate-100 mt-0.5 text-sm font-semibold flex justify-between items-center">
          <div>
            <h3 className=" uppercase ">Research Highlights :</h3>
            {college?.researchWorks?.length && (
              <h3 className="font-normal">{college.researchWorks[0]}</h3>
            )}
          </div>
          <MdScience className=" size-6 font-normal" />
        </div>
        {from == "/college" && (
          <p className="text-slate-300 mt-0.5">
            Research Count: {college?.researchCount}
          </p>
        )}
        <div className="card-actions mt-auto ">
          <Link
            to={`/college/${college?._id}`}
            className="text-slate-100 px-4 py-2 rounded bg-blue-500 hover:bg-blue-400 text-base  transition duration-300"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
