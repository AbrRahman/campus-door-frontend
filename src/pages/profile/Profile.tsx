import { useState } from "react";
import {
  editProfileValidation,
  passwordValidation,
  type TEditProfileInput,
  type TPasswordInputs,
} from "../../schemas/registerValidation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Profile = () => {
  const [editProfileToggle, setEditProfileToggle] = useState(false);
  const [passwordConfirmErr, setPasswordConfirmErr] = useState("");

  const profile = {
    name: "Arjun Mehta",
    email: "arjun.mehta@example.com",
    image:
      "https://res.cloudinary.com/dmhfrwdq3/image/upload/v1757393705/user_8895458_f5usma.png",
    phone: "+91 9876543210",
    role: "user",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TEditProfileInput>({
    resolver: zodResolver(editProfileValidation),
  });

  //   handle edit  profile info
  const handleEditProfile: SubmitHandler<TEditProfileInput> = (data) => {
    console.log(data);
    reset();
  };

  //   handle password
  const {
    register: passwordRegister,
    handleSubmit: passwordHandleSubmit,
    reset: resetPassword,
    formState: { errors: passwordErrors },
  } = useForm<TPasswordInputs>({
    resolver: zodResolver(passwordValidation),
  });
  // handel password change
  const handelPasswordChange: SubmitHandler<TPasswordInputs> = (data) => {
    if (data?.newPassword !== data?.confirmPassword) {
      setPasswordConfirmErr("Passwords do not match");
      return;
    }
    console.log(data);
    resetPassword();
  };

  return (
    <div className="bg-violet-950">
      <div className=" container mx-auto px-4 lg:px-20 pt-8 pb-12  lg:pb-20 ">
        <h1 className="text-2xl lg:text-4xl text-center text-slate-100 font-semibold">
          My Profile
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 mt-8 lg:mt-12">
          <div className="lg:col-span-4">
            <div className="mx-auto flex justify-center items-center w-52 h-52 rounded-full">
              <img className="w-full" src={profile?.image} alt="profile pice" />
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
              <div className=" bg-violet-900 px-4 lg:px-8 rounded shadow py-8 lg:py-12 mt-4 lg:mt-0">
                <div className=" flex flex-col gap-3">
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
                    <h1>Role: </h1>
                    <h1>{profile?.role}</h1>
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
                        <p className="text-red-500">{errors?.name?.message}</p>
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
                        <p className="text-red-500">{errors?.phone?.message}</p>
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
                        <p className="text-red-500">{errors?.image?.message}</p>
                      </div>

                      {/* Register btn btn */}
                      <button
                        type="submit"
                        className="cursor-pointer  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                      >
                        Update
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
                        Save Change
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
