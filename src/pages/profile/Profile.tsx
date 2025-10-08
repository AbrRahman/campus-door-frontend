import { useState } from "react";
import {
  editProfileValidation,
  passwordValidation,
  type TEditProfileInput,
  type TPasswordInputs,
} from "../../schemas/registerValidation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useGetUserProfileQuery,
  usePasswordChangeMutation,
  useUpdateProfileMutation,
} from "../../redux/features/auth/authApi";
import { useMyAdmittedCollegeQuery } from "../../redux/features/admission/admissionApi";
import { toast } from "sonner";
import { useAppDispatch } from "../../redux/features/hooks";
import { useNavigate } from "react-router";
import { logOut } from "../../redux/features/auth/authSlice";

const Profile = () => {
  const [editProfileToggle, setEditProfileToggle] = useState(false);
  const [passwordConfirmErr, setPasswordConfirmErr] = useState("");

  // call rtk query
  const { data: profile, isLoading } = useGetUserProfileQuery("");
  // admitted college
  const { data: college } = useMyAdmittedCollegeQuery("");
  // update user quey call
  const [updateProfile, { isLoading: updateProfileLoading }] =
    useUpdateProfileMutation();
  const [updatePassword, { isLoading: passwordChangeLoading }] =
    usePasswordChangeMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditProfileInput>({
    resolver: zodResolver(editProfileValidation),
  });

  //   handle edit  profile info
  const handleEditProfile: SubmitHandler<TEditProfileInput> = async (data) => {
    // generate profile form data
    const formData = new FormData();
    formData.append("name", data?.name as string);
    formData.append("phone", data?.phone as string);

    //  if user upload image file set image file from data
    Array.from(data.image ?? []).forEach((file) => {
      formData.append("file", file);
    });

    try {
      const result = await updateProfile(formData)?.unwrap();
      if (result?.success) {
        toast.success("Profile Updated");
        setEditProfileToggle(false);
      }
    } catch (err) {
      toast.error("Profile update failed");
      console.log(err);
    }
  };

  //   handle password
  const {
    register: passwordRegister,
    handleSubmit: passwordHandleSubmit,
    reset,
    formState: { errors: passwordErrors },
  } = useForm<TPasswordInputs>({
    resolver: zodResolver(passwordValidation),
  });
  // handel password change
  const handelPasswordChange: SubmitHandler<TPasswordInputs> = async (data) => {
    if (data?.newPassword !== data?.confirmPassword) {
      setPasswordConfirmErr("Passwords do not match");
      return;
    }
    try {
      const result = await updatePassword({
        password: data?.newPassword,
        oldPassword: data?.oldPassword,
      }).unwrap();
      if (result?.success) {
        toast.success("Password changed successfully!");
        reset();
        setPasswordConfirmErr("");
        dispatch(logOut());
        navigate("/login");
      } else {
        toast.error("Something went wrong. Try again later.");
      }
    } catch (err) {
      toast.error("Something went wrong. Try again later.");
      console.log(err);
    }
  };

  return (
    <div className="bg-violet-950">
      {/* loading */}
      {isLoading && (
        <div className=" flex justify-center items-center h-[86vh]">
          {" "}
          <span className="loading loading-bars loading-xl text-blue-500"></span>
        </div>
      )}
      {!isLoading && (
        <div className=" container mx-auto px-4 lg:px-20 pt-8 pb-12  lg:pb-20 ">
          <h1 className="text-2xl lg:text-4xl text-center text-slate-100 font-semibold">
            My Profile
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 mt-8 lg:mt-12">
            <div className="lg:col-span-4">
              <div className="mx-auto flex justify-center items-center w-52 h-52 rounded-full">
                <img
                  className="w-full rounded-full"
                  src={profile?.image}
                  alt="profile pice"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-center mt-2 space-y-1">
                <h2 className="text-slate-100">{profile?.name}</h2>
                <h2 className="text-slate-100">{profile?.email}</h2>
              </div>
              <div className="mt-2 text-center">
                {/* edit profile btn */}
                <button
                  onClick={() => setEditProfileToggle(!editProfileToggle)}
                  className="cursor-pointer  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                >
                  Edit Profile
                </button>
              </div>
            </div>
            <div className="lg:col-span-8">
              {/* profile info */}
              {!editProfileToggle && (
                <div className=" bg-violet-900/10 px-4 lg:px-8 rounded shadow py-8 lg:py-12 mt-4 lg:mt-0">
                  <div className=" flex flex-col ">
                    <div className="text-slate-400  rounded px-2 py-1 flex items-center gap-2 font-semibold">
                      <h1>Full Name: </h1>
                      <h1>{profile?.name}</h1>
                    </div>
                    <div className="text-slate-400 rounded px-2 py-1 flex items-center gap-2 font-semibold">
                      <h1>Email: </h1>
                      <h1>{profile?.email}</h1>
                    </div>

                    <div className="text-slate-400 rounded px-2 py-1 flex items-center gap-2 font-semibold">
                      <h1>Phone: </h1>
                      <h1>{profile?.phone}</h1>
                    </div>
                    <div className="text-slate-400  rounded px-2 py-1 flex items-center gap-2 font-semibold">
                      <h1>College: </h1>
                      <h1>
                        {college
                          ? college?.name
                          : "Not admitted to any college."}
                      </h1>
                    </div>
                  </div>
                </div>
              )}

              {/* edit profile form */}
              {editProfileToggle && (
                <div className=" bg-violet-900 px-4 lg:px-8 rounded shadow py-8 lg:py-12 mt-4 lg:mt-0">
                  {/* profile info change */}
                  <h1 className="text-2xl  text-slate-100 font-semibold">
                    Edit profile info
                  </h1>
                  <div>
                    <form onSubmit={handleSubmit(handleEditProfile)}>
                      <div className="space-y-1">
                        {/* name */}
                        <div>
                          <label className="block text-slate-100 mb-1.5">
                            Full name
                          </label>
                          <input
                            type="text"
                            defaultValue={profile?.name}
                            {...register("name")}
                            placeholder="Enter your full name"
                            className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                          />
                          <p className="text-red-500">
                            {errors?.name?.message}
                          </p>
                        </div>
                        {/* email */}
                        <div>
                          <label className="block text-slate-100 mb-1.5">
                            Email
                          </label>
                          <input
                            defaultValue={profile?.email}
                            type="email"
                            disabled
                            placeholder="Enter your email"
                            className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                          />
                          {/* <p className="text-red-500">{errors?.email?.message}</p> */}
                        </div>
                        {/* college */}
                        <div>
                          <label className="block text-slate-100 mb-1.5">
                            College
                          </label>
                          <input
                            defaultValue={
                              college?.name
                                ? college?.name
                                : "Not admitted to any college."
                            }
                            type="text"
                            disabled
                            className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                          />
                          {/* <p className="text-red-500">{errors?.email?.message}</p> */}
                        </div>
                        {/* full password */}
                        <div>
                          <label className="block text-slate-100 mb-1.5">
                            Phone
                          </label>
                          <input
                            type="text"
                            defaultValue={profile?.phone}
                            {...register("phone")}
                            placeholder="Enter your phone number"
                            className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                          />
                          <p className="text-red-500">
                            {errors?.phone?.message}
                          </p>
                        </div>
                        <div>
                          <label className="block text-slate-100 mb-1.5">
                            Upload Profile image
                          </label>
                          <input
                            type="file"
                            {...register("image")}
                            className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                          />
                          <p className="text-red-500">
                            {errors?.image?.message}
                          </p>
                        </div>

                        {/* Register btn btn */}
                        <button
                          type="submit"
                          className="cursor-pointer  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                        >
                          {updateProfileLoading ? (
                            <span className="loading loading-spinner mx-5 loading-md"></span>
                          ) : (
                            <span> Update</span>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* profile password change */}
                  <h1 className="text-2xl  text-slate-100 font-semibold mt-6">
                    Password Change
                  </h1>
                  <div>
                    <form onSubmit={passwordHandleSubmit(handelPasswordChange)}>
                      <div className="space-y-1">
                        {/* name */}
                        <div>
                          <label className="block text-slate-100 mb-1.5">
                            Old password
                          </label>
                          <input
                            type="password"
                            {...passwordRegister("oldPassword")}
                            placeholder="Enter your old password"
                            className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                          />
                          <p className="text-red-500">
                            {passwordErrors?.oldPassword?.message}
                          </p>
                        </div>
                        {/* email */}
                        <div>
                          <label className="block text-slate-100 mb-1.5">
                            New Password
                          </label>
                          <input
                            type="password"
                            {...passwordRegister("newPassword")}
                            placeholder="Enter your new password"
                            className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                          />
                          <p className="text-red-500">
                            {passwordErrors?.newPassword?.message}
                          </p>
                        </div>
                        {/* full password */}
                        <div>
                          <label className="block text-slate-100 mb-1.5">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            {...passwordRegister("confirmPassword")}
                            placeholder="Confirm your password"
                            className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                          />
                          <p className="text-red-500">
                            {passwordErrors?.confirmPassword?.message}
                          </p>
                        </div>

                        {/* password update  btn */}
                        <p className="text-red-500">{passwordConfirmErr}</p>
                        <button
                          type="submit"
                          className="cursor-pointer  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                        >
                          {passwordChangeLoading ? (
                            <span className="loading loading-spinner mx-7 loading-md"></span>
                          ) : (
                            <span> Update</span>
                          )}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
