import { useForm } from "react-hook-form";
import useAuthStore from "@/store/authStore";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

const DashProfile = () => {
  const { user } = useAuthStore();

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: user.username,
      email: user.email,
      password: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset({
      username: data.username,
      email: data.email,
      password: "",
    });
  };

  return (
    <div>
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mt-4 sm:mt-10">
        Profile
      </h1>

      <div className="flex items-center justify-center my-2 sm:my-6">
        <img
          className="w-24 sm:w-36 h-auto border-4 rounded-full "
          src={`${
            user?.profilePicture
              ? user?.profilePicture
              : "https://plus.unsplash.com/premium_vector-1727953895100-6f169fe15bc6?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          } `}
          alt={user.username}
        />
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <Button
          className=" w-full bg-gradient-to-br from-purple-600 to-pink-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center text-white"
          type="submit"
        >
          Update
        </Button>
      </form>

      <div className="flex items-center mt-2 sm:mt-4 text-red-500 justify-between font-semibold ">
        <span>Sign Out</span>
        <span>Delete account</span>
      </div>
    </div>
  );
};

export default DashProfile;
