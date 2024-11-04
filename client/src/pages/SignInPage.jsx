import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/utils/signInValidationSchema";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import useAuthStore from "@/store/authStore";

const SignInPage = () => {
  const { setUser, setToken } = useAuthStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signInSchema),
  });

  const backendApiUrl = import.meta.env.VITE_BACKEND_API;

  const mutation = useMutation(
    async (formData) => {
      const url = `${backendApiUrl}/api/auth/signin`;
      const response = await axios.post(url, formData);
      return response.data;
    },
    {
      onSuccess: (data) => {
        setUser(data.user);
        setToken(data.token);
        toast.success(data.message || "Sign in successful!");
        navigate("/");
      },
      onError: (error) => {
        console.error("Sign up error details:", error.response || error);
        toast.error(error?.response?.data?.message || "Sign in failed");
      },
    }
  );

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row lg:justify-between gap-y-4 gap-8 lg:gap-x-10">
        {/* Left - Image */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full object-cover rounded-md shadow-lg my-4 h-[30vh] md:h-[50vh]  lg:h-[75vh]"
            src="https://plus.unsplash.com/premium_vector-1725969953056-e5cd3cd2cf36?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="blog"
          />
        </div>

        {/* Right - Form */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl lg:text-4xl text-center font-extrabold mt-6 lg:mt-10">
            Sign In
          </h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 mt-10 lg:mt-20"
          >
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input type="email" {...register("email")} />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <Label>Password</Label>
              <Input type="password" {...register("password")} />
              {errors.password && (
                <p className=" text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              disabled={mutation.isLoading}
              className="w-full bg-gradient-to-br from-purple-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center text-white"
            >
              {mutation.isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
          <div className="mt-4   flex justify-center gap-2">
            <span>Does not have an account?</span>
            <Link className="text-blue-600 hover:underline" to="/sign-up">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
