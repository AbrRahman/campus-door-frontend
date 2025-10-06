import { useState } from "react";
import type { TCollege } from "../../types/college.type";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  admissionValidation,
  type TAdmissionInputs,
} from "../../schemas/admissionValidation";
import { zodResolver } from "@hookform/resolvers/zod";

const Admission = () => {
  const [selectedCollege, setSelectedCollege] = useState("");
  const colleges = [
    {
      _id: "abc",
      name: "Summit Ridge Institute of Technology",
      image:
        "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1759745777/college-1_ukt2kv.png",
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
      admissionProcess:
        "Applicants must submit an online application along with academic transcripts, a statement of purpose, and two letters of recommendation. Shortlisted candidates will be invited for an online interview before final selection.",
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

  //   react hook form
  // react hookFrom
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAdmissionInputs>({
    resolver: zodResolver(admissionValidation),
  });

  //   handle admission form
  const handleAdmission: SubmitHandler<TAdmissionInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-violet-950">
      <div className=" container mx-auto px-4 lg:px-20 pt-8 pb-12  lg:pb-20 ">
        <h1 className="text-2xl lg:text-4xl text-center text-slate-100 font-semibold">
          Select a College for Admission
        </h1>
        {/* college name  */}
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-12 gap-5 ">
          {colleges?.map((college: TCollege) => (
            <div
              key={college?._id}
              onClick={() => setSelectedCollege(college?._id)}
              className={`rounded text-center px-4 py-7 flex justify-center shadow items-center cursor-pointer hover:bg-violet-800 select-none transition duration-300 ${
                college?._id == selectedCollege
                  ? "bg-violet-800"
                  : "bg-violet-900 "
              }`}
            >
              <h3 className="text-slate-100 text-2xl">{college?.name}</h3>
            </div>
          ))}
        </div>
        {/* admission form */}
        {selectedCollege && (
          <div className="bg-violet-900 shadow-lg rounded-lg lg:w-3/4 mx-auto px-8 py-8 lg:py-12 mt-8 lg:mt-12">
            <h1 className="text-xl lg:text-2xl text-center  text-slate-100 font-semibold">
              Admission Form
            </h1>
            <div>
              <form onSubmit={handleSubmit(handleAdmission)}>
                <div className="space-y-1.5">
                  {/* full name */}
                  <div>
                    <label className="block text-slate-100 mb-2">Name</label>
                    <input
                      type="text"
                      {...register("candidateName")}
                      placeholder="Enter your full name"
                      className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    <p className="text-red-500">
                      {errors?.candidateName?.message}
                    </p>
                  </div>
                  {/* email */}
                  <div>
                    <label className="block text-slate-100 mb-2">Email</label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="Enter your email"
                      className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    <p className="text-red-500">{errors?.email?.message}</p>
                  </div>
                  {/* subject */}
                  <div>
                    <label className="block text-slate-100 mb-2">Subject</label>
                    <input
                      type="text"
                      {...register("subject")}
                      placeholder="Enter subject name"
                      className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    <p className="text-red-500">{errors?.subject?.message}</p>
                  </div>
                  {/*  phone*/}
                  <div>
                    <label className="block text-slate-100 mb-2">Phone</label>
                    <input
                      type="text"
                      {...register("phone")}
                      placeholder="Enter your phone number"
                      className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    <p className="text-red-500">{errors?.phone?.message}</p>
                  </div>
                  {/*  address*/}
                  <div>
                    <label className="block text-slate-100 mb-2">Address</label>
                    <input
                      type="text"
                      {...register("address")}
                      placeholder="Enter your address"
                      className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    <p className="text-red-500">{errors?.address?.message}</p>
                  </div>
                  {/*  date Of Birth*/}
                  <div>
                    <label className="block text-slate-100 mb-2">
                      Date of Birth
                    </label>
                    <input
                      type="text"
                      {...register("dateOfBirth")}
                      placeholder="Enter your date of Birth"
                      className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    <p className="text-red-500">
                      {errors?.dateOfBirth?.message}
                    </p>
                  </div>
                  {/* image filed */}
                  <div>
                    <label className="block text-slate-100 mb-2">
                      Upload Image
                    </label>
                    <input
                      type="file"
                      {...register("image")}
                      className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                    />
                    <p className="text-red-500">{errors?.image?.message}</p>
                  </div>
                  {/* submit btn */}
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
//   candidateName: string;
//   subject: string;
//   email: string;
//   phone: string;
//   address: string;
//   dateOfBirth: string;
//   image: FileList;
export default Admission;
