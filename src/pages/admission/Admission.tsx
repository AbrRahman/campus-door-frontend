import { useState } from "react";
import type { TCollege } from "../../types/college.type";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  admissionValidation,
  type TAdmissionInputs,
} from "../../schemas/admissionValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useGetAllCollegeQuery } from "../../redux/features/college/collegeApi";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../redux/features/hooks";
import { useCreateAdmissionMutation } from "../../redux/features/admission/admissionApi";

const Admission = () => {
  const [selectedCollege, setSelectedCollege] = useState("");
  const { user } = useAppSelector((state) => state.auth);
  const { data: colleges, isLoading: isCollegeDataLoading } =
    useGetAllCollegeQuery("");
  const [createAdmission] = useCreateAdmissionMutation();
  const navigate = useNavigate();

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
  const handleAdmission: SubmitHandler<TAdmissionInputs> = async (data) => {
    if (!user) {
      navigate("/login", {
        state: { from: { pathname: "/admission" } },
        replace: true,
      });
    }

    // generate form data
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (key !== "image") {
        formData.append(key, value as string);
      }
    }
    // add user id and college id
    if (user && user._id) {
      formData.append("user", user._id as string);
    }
    formData.append("college", selectedCollege);
    //  if user upload image file set image file from data
    Array.from(data.image ?? []).forEach((file) => {
      formData.append("file", file);
    });
    try {
      const result = await createAdmission({ formData });
      console.log("ad", result);
      if (result?.data?.success) {
        toast.success("Admitted successfully");
        reset();
        navigate("/my-college");
        reset();
      }

      // handle backend error
      if ("error" in result) {
        toast.error("Admission process failed");
      }
    } catch (err) {
      console.log(err);
      toast.error("Admission process failed");
    }
  };

  return (
    <div className="bg-violet-950">
      <div className=" container mx-auto px-4 lg:px-20 pt-8 pb-12  lg:pb-20 ">
        <h1 className="text-2xl lg:text-4xl text-center text-slate-100 font-semibold">
          Select a College for Admission
        </h1>
        {/* college name  */}
        <div className="grid grid-cols-2 lg:grid-cols-3 mt-8 lg:mt-12 gap-5 ">
          {isCollegeDataLoading &&
            [...Array(6).keys()].map((id) => (
              <div
                key={id}
                className="rounded animate-pulse w-full h-25 px-4 py-7 bg-violet-900"
              ></div>
            ))}
          {colleges?.map((college: TCollege) => (
            <div
              key={college?._id}
              onClick={() => setSelectedCollege(college?._id)}
              className={`rounded text-center px-4 py-7 flex justify-center shadow items-center cursor-pointer hover:bg-violet-800 select-none transition duration-300 ${
                college?._id == selectedCollege
                  ? "bg-blue-500"
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

export default Admission;
