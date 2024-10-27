import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row lg:justify-between gap-y-4 gap-8 lg:gap-x-10">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full object-cover rounded-md shadow-lg my-4 h-[30vh] md:h-[50vh] lg:h-auto"
            src="https://plus.unsplash.com/premium_vector-1725969953056-e5cd3cd2cf36?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="blog"
          />
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl lg:text-4xl text-center font-extrabold mt-6 lg:mt-10">
            Sign Up
          </h1>
          <form className="flex flex-col gap-4 mt-10 lg:mt-20">
            <div className="flex flex-col gap-2">
              <Label>Username</Label>
              <Input />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-br from-purple-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center text-white"
            >
              Sign Up
            </Button>
          </form>
          <div className="mt-4 flex justify-center gap-2">
            <span>Already have an account?</span>
            <Link className="text-blue-600 hover:underline" to="/sign-in">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
