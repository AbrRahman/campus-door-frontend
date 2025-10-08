import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  loginValidation,
  type TLoginInputs,
} from "../../schemas/loginValidation";
import { Link, useLocation, useNavigate } from "react-router";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { toast } from "sonner";
import { loginWithGoogle } from "../../redux/features/auth/firebase/authService";
import {
  useFirebaseLoginMutation,
  useLoginMutation,
} from "../../redux/features/auth/authApi";
import { useAppDispatch } from "../../redux/features/hooks";
import { verifyToken } from "../../utils/verifyToken";
import { setUser } from "../../redux/features/auth/authSlice";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useState } from "react";

const Login = () => {
  const [unauthorizeErr, setUnAuthorizeErr] = useState("");
  // trk query call
  const [fireBaseLogin] = useFirebaseLoginMutation();
  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  // react hookFrom
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TLoginInputs>({
    resolver: zodResolver(loginValidation),
  });

  // after login navigation path
  const from = location.state?.from?.pathname || "/";

  const handleLogin: SubmitHandler<TLoginInputs> = async (data) => {
    try {
      const result = await login(data);

      // handle invalid email or password case
      if ("error" in result) {
        const err = result?.error as FetchBaseQueryError & {
          status: number;
        };

        if (err?.status == 401) {
          toast.error("Login failed");
          setUnAuthorizeErr("Invalid email or password");
          return;
        }
      }

      const user = await verifyToken(result?.data?.accessToken);

      dispatch(setUser({ user, token: result?.data?.accessToken, uid: null }));
      toast.success("Login ");
      navigate(from, { replace: true });
      reset();
    } catch (err) {
      toast.error("Login failed");
      console.log(err);
    }
  };

  // handle google login
  const handleGoogleLogin = async () => {
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

        navigate(from, { replace: true });
      }
    } catch (err) {
      toast.error("Login failed");
      console.log(err);
    }
  };

  return (
    <div className="bg-violet-950">
      <div className=" container mx-auto px-4 lg:px-20 pt-8 pb-12  lg:pb-20 ">
        <div className="bg-violet-900 shadow-lg rounded-lg lg:w-3/5 mx-auto px-8 py-8 lg:py-12 mt-8 lg:mt-12">
          <h1 className="text-2xl lg:text-3xl text-center text-slate-100 font-semibold">
            Login Form
          </h1>
          <div>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="space-y-1.5">
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
                {/* password */}
                <div>
                  <label className="block text-slate-100 mb-2">Password</label>
                  <input
                    type="password"
                    {...register("password")}
                    placeholder="Enter your password"
                    className="w-full bg-violet-950 text-white placeholder-slate-300 border border-violet-600 rounded-lg px-4 py-2 focus:border-blue-400 focus:ring-2 focus:ring-blue-400 outline-none"
                  />
                  <p className="text-red-500">{errors?.password?.message}</p>
                </div>
                <p className="text-slate-100">
                  Don't have a account{" "}
                  <Link to="/register" className=" underline">
                    Register
                  </Link>
                </p>
                {/* Login btn btn */}
                <p className="text-red-500 pb-0.5">{unauthorizeErr}</p>
                <button
                  type="submit"
                  className="cursor-pointer  bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
                >
                  {isLoading ? (
                    <span className="loading loading-spinner mx-5 loading-md"></span>
                  ) : (
                    <span>Login</span>
                  )}
                </button>
              </div>
            </form>
            <div className="flex flex-col lg:flex-row  mt-2.5 gap-2.5 lg:gap-4">
              {/* google login */}
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center gap-2 cursor-pointer justify-center bg-red-500 hover:bg-red-600  text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
              >
                <span>Login With Google</span>
                <FaGoogle className=" size-4" />
              </button>
              {/* facebook login */}
              <button
                type="submit"
                className="w-full flex items-center gap-2 justify-center cursor-pointer bg-blue-600 hover:bg-blue-700  text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300"
              >
                <span> Login With Facebook</span>
                <FaFacebook className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
