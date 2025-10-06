import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import {
  registerValidation,
  type TRegisterInputs,
} from "../../schemas/registerValidation";

const Register = () => {
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
  const handleRegister: SubmitHandler<TRegisterInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="bg-violet-950">
      <div className=" container mx-auto px-4 lg:px-20 pb-12  lg:pb-20 ">
        <div className="bg-violet-900 shadow-lg rounded-lg lg:w-3/5 mx-auto px-8 py-8 lg:py-12 pt-6">
          <h1 className="text-2xl lg:text-4xl text-center text-slate-100 font-semibold">
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
                  <p className="text-red-500">{errors?.email?.message}</p>
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
                  Register
                </button>
              </div>
            </form>
            <div className="flex flex-col lg:flex-row  mt-2.5 gap-2.5 lg:gap-4">
              {/* google Register */}
              <button className="w-full flex items-center gap-2 cursor-pointer justify-center bg-red-500 hover:bg-red-600  text-white font-semibold py-2 rounded-lg shadow-md transition-all duration-300">
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
