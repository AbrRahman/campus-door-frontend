import { useParams } from "react-router";
import RatingCount from "../../component/RatingCount/RatingCount";
import { useGetSingleCollegeQuery } from "../../redux/features/college/collegeApi";

const CollegeDetails = () => {
  const { id } = useParams();
  const { data: college, isLoading } = useGetSingleCollegeQuery(id);
  return (
    <div className="bg-violet-950">
      {isLoading && (
        <div className=" flex justify-center items-center h-[86vh]">
          {" "}
          <span className="loading loading-bars loading-xl text-blue-500"></span>
        </div>
      )}

      {!isLoading && (
        <div className=" container mx-auto px-4 lg:px-20 pt-8 pb-12  lg:pb-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7">
            {/* details page college image */}
            <div className="lg:col-span-6">
              <img
                src={college?.image}
                className=" w-full "
                alt="college image"
              />
            </div>

            {/* details page basic info */}
            <div className="lg:col-span-6">
              {/* college name */}
              <h1 className="text-2xl lg:text-4xl font-semibold text-slate-100">
                {college?.name}
              </h1>
              {/* rating */}
              <h4 className="mt-2.5 text-2xl">
                <RatingCount value={Number(college?.rating)} />
              </h4>
              {/* admission date */}
              <div className="text-slate-100 mt-1.5 text-sm font-semibold flex gap-3 items-center">
                <h3 className="">Admission Dates :</h3>
                <h3>{college?.admissionDates}</h3>
              </div>
              {/* description */}
              <p className="mt-1.5 text-slate-400">{college?.description}</p>
              {/* research count */}
              <h5 className="mt-1.5 text-md text-slate-100 font-semibold">
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
          </div>
          {/* admission process */}
          <div className="mt-8px">
            <h3 className="text-xl lg:text-2xl font-semibold text-slate-100">
              Admission Process
            </h3>
            <p className="text-base text-slate-400 font-semibold">
              {college?.admissionProcess}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollegeDetails;
