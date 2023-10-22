"use client";

import { AlertError } from "@/app/admin/components/Alert";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignIn() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onSignin = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/user/signin", user);
      console.log("Login success", response.data);
      router.push("/admin/dashboard");
    } catch (error: any) {
      console.log("Login failed", error.message);

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
            Sign-in Now
          </h2>
        </div>
        <form className="mx-auto mt-10 max-w-sm space-y-5">
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
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-primary hover:text-primary"
                >
                  Forgot password?
                </a>
              </div>
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

          <div>
            <button
              onClick={(e) => onSignin(e)}
              className="btn btn-md btn-primary w-full"
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{" "}
          <a
            href="/user/auth/signup"
            className="font-semibold leading-6 text-primary hover:text-primary"
          >
            Create account
          </a>
        </p>
      </div>
    </>
  );
}
