import React from "react";
import SignUpForm from "../../components/auth/SignUpForm";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <img className="mx-auto h-36 w-auto" src="/logo.svg" alt="LinkedIn" />
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Make the Most of Your Network
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md bg-white p-8 border border-gray-300 rounded-lg shadow-md">
        <SignUpForm />
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Already on LinkedIn?
              </span>
            </div>
          </div>
          <div className="mt-6">
            <Link
              to="/login"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
