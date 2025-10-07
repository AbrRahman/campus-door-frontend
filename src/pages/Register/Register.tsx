import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useLocation, useNavigate } from "react-router";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
  registerValidation,
  type TRegisterInputs,
} from "../../schemas/registerValidation";
import { toast } from "sonner";
import {
  useCreateUserMutation,
  useFirebaseLoginMutation,
} from "../../redux/features/auth/authApi";
import { useState } from "react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import type { TErrorResponse } from "../../types/error.type";
import { loginWithGoogle } from "../../redux/features/auth/firebase/authService";
import { verifyToken } from "../../utils/verifyToken";
import { useAppDispatch } from "../../redux/features/hooks";
import { setUser } from "../../redux/features/auth/authSlice";

const Register = () => {
  const [duplicateEmailError, setDuplicateEmailError] = useState("");
  // rtk query
  const [createUser, { isLoading }] = useCreateUserMutation();
  const [fireBaseLogin] = useFirebaseLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // react hookFrom
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterInputs>({
    resolver: zodResolver(registerValidation),
  });

  //   handle Register form
  const handleRegister: SubmitHandler<TRegisterInputs> = async (data) => {
    // generate form data
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      if (key !== "image") {
        formData.append(key, value as string);
      }
    }

    //  if user upload image file set image file from data
    Array.from(data.image ?? []).forEach((file) => {
      formData.append("file", file);
    });

    const result = await createUser(formData);
    if (result?.data?.success) {
      toast.success("Register successfully");
      reset();
      navigate("/login");
    }

    // handle backend error
    if ("error" in result) {
      const err = result?.error as FetchBaseQueryError & {
        data: TErrorResponse;
      };
      if (err?.data?.error?.code == 11000) {
        setDuplicateEmailError(err.data.errorSource?.[0]?.message);
      }
      toast.error("Register failed");
    }
  };

  // handle google login
  const handleGoogleLogin = async () => {
    console.log("hello");
    try {
      const result = await loginWithGoogle();

      const { photoURL, displayName, email, uid } = result;

      if (photoURL && displayName && email) {
        const { data } = await fireBaseLogin({
          name: displayName,
          email: email,
          image: photoURL,
        });

        const user = await verifyToken(data?.data?.accessToken);
        dispatch(setUser({ user, token: data?.data?.accessToken, uid }));
        toast.success("Login ");
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      }
    } catch (err) {
      toast.error("Login failed");
      console.log(err);
    }
  };

  return (
    <div className="bg-violet-950">
      <div className=" container mx-auto px-4 lg:px-20 pb-12  lg:pb-20 ">
        <div className="bg-violet-900 shadow-lg rounded-lg lg:w-3/5 mx-auto px-8 py-8 lg:py-12 pt-6">
          <h1 className="text-2xl lg:text-3xl text-center text-slate-100 font-semibold">
            Register Form
          </h1>
          <div>
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="space-y-1">
                {/* name */}
                <div>
                  <label className="block text-slate-100 mb-1.5">
                    Full name
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Enter your full name"
                    className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <p className="text-red-500">{errors?.name?.message}</p>
                </div>
                {/* email */}
                <div>
                  <label className="block text-slate-100 mb-1.5">Email</label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Enter your email"
                    className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <p className="text-red-500">
                    {" "}
                    {errors?.email?.message
                      ? errors?.email?.message
                      : duplicateEmailError}
                  </p>
                </div>
                {/* full password */}
                <div>
                  <label className="block text-slate-100 mb-1.5">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="Enter your password"
                    className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <p className="text-red-500">{errors?.password?.message}</p>
                </div>
                <div>
                  <label className="block text-slate-100 mb-1.5">Phone</label>
                  <input
                    type="text"
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
                <p className="text-slate-100">
                  Do you have account{" "}
                  <Link to="/login" className=" underline">
                    Register
                  </Link>
                </p>
                {/* Register btn btn */}
                <button
                  type="submit"
                  className="cursor-pointer  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                >
                  {isLoading ? (
                    <span className="loading loading-spinner mx-5 loading-md"></span>
                  ) : (
                    <span>Register</span>
                  )}
                </button>
              </div>
            </form>
            <div className="flex flex-col lg:flex-row  mt-2.5 gap-2.5 lg:gap-4">
              {/* google Register */}
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center gap-2 cursor-pointer justify-center bg-red-500 hover:bg-red-600  text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
              >
                <span>Register With Google</span>
                <FaGoogle className=" size-4" />
              </button>
              {/* facebook Register */}
              <button
                type="submit"
                className="w-full flex items-center gap-2 justify-center cursor-pointer bg-blue-600 hover:bg-blue-700  text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
              >
                <span> Register With Facebook</span>
                <FaFacebook className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
