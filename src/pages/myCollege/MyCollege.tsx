import RatingCount from "../../component/RatingCount/RatingCount";
import ReviewForm from "../../component/review/ReviewForm";
import { useMyAdmittedCollegeQuery } from "../../redux/features/admission/admissionApi";

const MyCollege = () => {
  const { data: college, isLoading } = useMyAdmittedCollegeQuery("");

  return (
    <div className="bg-violet-950">
      {/* loading */}
      {isLoading && (
        <div className=" flex justify-center items-center h-[86vh]">
          {" "}
          <span className="loading loading-bars loading-xl text-blue-500"></span>
        </div>
      )}
      {/* not admitted */}
      {!isLoading && !college && (
        <div className="flex justify-center items-center h-[75vh]">
          <h1 className="text-slate-100 font-semibold text-xl text-center">
            You are not admitted to any college.
          </h1>
        </div>
      )}
      {/* show college data */}
      {college && !isLoading && (
        <div className=" container mx-auto px-4 lg:px-20 pt-8 pb-12  lg:pb-20 ">
          <h1 className="text-2xl lg:text-4xl text-center text-slate-100 font-semibold ">
            My college
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 mt-8 gap-3 lg:mt-12">
            {/* college info with image */}
            <div className="lg:col-span-8">
              {/* college image */}
              <div className=" max-w-80 mx-auto ">
                <img
                  src={college?.image}
                  className=" w-full "
                  alt="college image"
                />
              </div>
              {/* college name */}
              <h1 className="text-2xl lg:text-4xl mt-4 font-semibold text-slate-100">
                {college?.name}
              </h1>
              {/* rating */}
              <h4 className="mt-2.5 text-2xl">
                <RatingCount value={Number(college?.rating)} />
              </h4>
              {/* description */}
              <p className="mt-2.5 text-slate-400 text-base">
                <strong className="text-slate-100">About: </strong>{" "}
                {college?.description}
              </p>
              <h5 className="mt-2 text-md text-slate-100 font-semibold">
                Research Count: {college?.researchCount}
              </h5>
              <div className="mt-3 grid grid-cols-1 lg:grid-cols-2">
                {/* events */}

                <div>
                  <h3 className=" uppercase font-semibold text-slate-100">
                    Events
                  </h3>
                  <ul className="pl-5 text-slate-300">
                    {college?.events?.map((event: string, id: number) => (
                      <li key={id} className=" list-disc">
                        {event}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* sports */}
                <div>
                  <h3 className=" uppercase font-semibold text-slate-100">
                    Sports
                  </h3>
                  <ul className="pl-5 text-slate-300">
                    {college?.sports?.map((sport: string, id: number) => (
                      <li key={id} className=" list-disc">
                        {sport}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/*  Research Works */}
              <div className="lg:mt-2.5 mt-0">
                <h3 className=" uppercase font-semibold text-slate-100">
                  Research Works
                </h3>
                <ul className="pl-5 text-slate-300">
                  {college?.researchWorks?.map(
                    (researchWork: string, id: number) => (
                      <li key={id} className=" list-disc">
                        {researchWork}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            {/* review form */}
            <div className="lg:col-span-4">
              <ReviewForm collegeId={college?._id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCollege;
