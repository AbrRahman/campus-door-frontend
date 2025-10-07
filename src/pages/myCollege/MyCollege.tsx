import RatingCount from "../../component/RatingCount/RatingCount";
import ReviewForm from "../../component/review/ReviewForm";

const MyCollege = () => {
  const college = {
    _id: "abcd",
    name: "Orion School of Business and Management",
    image:
      "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759745777/college-5_on64hy.png",
    admissionDates: "April 20 - June 30, 2026",
    rating: 4.9,
    researchCount: 27,
    description:
      "Orion School of Business delivers cutting-edge management education, integrating entrepreneurship, data analytics, and sustainability in its curriculum.",
    events: [
      "Entrepreneurship Week",
      "Case Study Challenge",
      "Global Business Summit",
    ],
    sports: ["Golf", "Cricket", "Swimming"],
    researchWorks: [
      "Sustainable Business Models",
      "Behavioral Economics",
      "Data-Driven Marketing Strategies",
    ],
    admissionProcess:
      "Prospective students must fill out the online form and provide transcripts, a resume, and a statement of purpose. Admission decisions are based on academic merit, group discussion, and personal interview.",
  };
  return (
    <div className="bg-violet-950">
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
              <strong>About: </strong> {college?.description}
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
                  {college?.events?.map((event: string, id) => (
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
                  {college?.sports?.map((sport: string, id) => (
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
                {college?.researchWorks?.map((researchWork: string, id) => (
                  <li key={id} className=" list-disc">
                    {researchWork}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* review form */}
          <div className="lg:col-span-4">
            <ReviewForm collegeId={college?._id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollege;
