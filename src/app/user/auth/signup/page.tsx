"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AlertError } from "@/app/admin/components/Alert";

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onSignup = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/user/signup", user);
      // console.log("Signup success", response.data);
      router.push("/user/auth/signin");
    } catch (error: any) {
      // console.log("Signup failed", error.response.data.error);
      AlertError("error", error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
          <div className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"></div>
        </div>
        <ToastContainer />
        <div className="mx-auto max-w-sm">
          <h2 className="text-xl font-bold tracking-tight text-primary sm:text-2xl">
            Create an Account
          </h2>

          <Link
            href="/user/auth/signin"
            className="font-bold text-xs leading-6 text-accent hover:text-primary"
          >
            Go back
          </Link>
        </div>
        <form className="mx-auto mt-4 max-w-sm space-y-5">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium leading-6 text-primary"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                value={user.fullName}
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
                name="fullName"
                type="text"
                required
                className="block w-full rounded-md border-0 pl-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="OtherNames"
              className="block text-sm font-medium leading-6 text-primary"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                value={user.phoneNumber}
                onChange={(e) =>
                  setUser({ ...user, phoneNumber: e.target.value })
                }
                name="phone"
                type="tel"
                required
                className="block w-full rounded-md border-0 pl-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-primary"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 pl-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-primary"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 pl-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <button
            onClick={(e) => onSignup(e)}
            className="btn btn-md btn-primary w-full"
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}
