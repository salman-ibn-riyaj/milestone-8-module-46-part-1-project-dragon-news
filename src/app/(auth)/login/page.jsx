"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LogInPage = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    if (res) {
      alert("Sign in success");
    }
    if (error) {
      alert("Log in failed " + error.message);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="relative fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          {/* <legend className="fieldset-legend">Login</legend> */}

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", { required: "Email field is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <label className="label">Password</label>
          <div className="relative">
            <input
              type={`${showPass ? "text" : "password"}`}
              className="input"
              placeholder="Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />

            {showPass ? (
              <span
                className="absolute right-3 top-3"
                onClick={() => setShowPass(!showPass)}
              >
                <FaRegEye />
              </span>
            ) : (
              <>
                <FaRegEyeSlash className="absolute right-3 top-3"
                onClick={() => setShowPass(!showPass)}/>
              </>
            )}
          </div>

          {errors.password && <span>{errors.password.message}</span>}

          <button className="btn btn-neutral mt-4">Login</button>
          <p>
            Don't have an account?{" "}
            <Link className="text-blue-500" href={"/register"}>
              Register
            </Link>
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default LogInPage;
