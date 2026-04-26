"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [showPass, setShowPass] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { name, email, photo, password } = data;
    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
    });

    console.log(res, error);

    if (res) {
      alert("Register successful");
      router.push("/");
    }
    if (error) {
      alert("Register failed." + error.message);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          {/* <legend className="fieldset-legend">Login</legend> */}

          <label className="label font-bold">Name</label>
          <input
            type="name"
            className="input"
            placeholder="Enter your name"
            {...register("name", { required: "Name field is required" })}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <label className="label font-bold">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            {...register("email", { required: "Email field is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <label className="label font-bold">Photo Url</label>
          <input
            type="photo"
            className="input"
            placeholder="Photo url"
            {...register("photo", { required: "Photo url field is required" })}
          />
          {errors.photo && <span>{errors.photo.message}</span>}

          <label className="label font-bold">Password</label>
          <div className="relative">
            <input
              type={`${showPass ? "text" : "password"}`}
              className="input"
              placeholder="Password"
              {...register("password", {
                required: "Password field is required",
              })}
            />
            <span className="absolute top-3 right-3" onClick={() => setShowPass(!showPass)}>
              {showPass ? <FaEye /> : <FaRegEyeSlash />}
            </span>
          </div>
          {errors.password && <span>{errors.password.message}</span>}

          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default RegisterPage;
