"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";

//Schema
import { schema } from "./schema";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema()),
  });

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <>
      <section className="h-screen w-full flex justify-center items-center">
        <div className="w-full xl:w-1/2 p-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className=" text-2xl font-bold">Create account</h1>
            <div>
              <span className="text-gray-600 text-sm">
                Already have an account?
              </span>
              <Link
                href="/login"
                className="text-gray-700 text-sm font-semibold"
              >
                Login
              </Link>
            </div>
            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="name"
                type="text"
                placeholder="Your Name"
                {...register("name")}
              />

              {errors.name && (
                <span className="text-red-500 mt-2 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="mb-4 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                placeholder="Your email address"
                {...register("email")}
              />

              {errors.email && (
                <span className="text-red-500 mt-2 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className="mb-6 mt-6">
              <label
                className="block text-gray-700 text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="text-sm bg-gray-200 appearance-none rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Your password"
                {...register("password")}
              />

              {errors.password && (
                <span className="text-red-500 mt-2 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="flex w-full mt-8">
              <button
                className="w-full bg-gray-800 hover:bg-grey-900 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="submit"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
