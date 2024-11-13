import { Link, NavLink, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { IoMenu, IoSearch } from "react-icons/io5";
import { FaMoon, FaSun } from "react-icons/fa";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { useState } from "react";
import useThemeStore from "@/store/themeStore";
import useAuthStore from "@/store/authStore";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { toast } from "react-toastify";

const navlinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/projects",
    title: "Projects",
  },
];

const Navbar = () => {
  const { user, clearAuth } = useAuthStore();

  const [isOpen, setIsOpen] = useState(false);

  const { darkMode, toggleTheme } = useThemeStore();

  const navigate = useNavigate();

  const handleSignOut = () => {
    clearAuth();
    navigate("/sign-in");
    toast.success(`${user?.username} signed out successfully!`);
  };

  return (
    <div className="w-full px-4 border-b-2 ">
      <nav className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4">
        <Link
          className="logo self-center whitespace-nowrap text-lg md:text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
          to="/"
        >
          Dinalipi
        </Link>

        <div className="hidden md:flex md:items-center relative">
          <Input placeholder="Search" className="dark:text-white" />
          <IoSearch className="w-6 h-6 absolute right-2 top-2 dark:text-white" />
        </div>

        <div className="hidden md:flex items-center gap-8 font-semibold">
          {navlinks.map((navlink) => (
            <NavLink
              to={navlink.path}
              key={navlink.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 dark:text-blue-400"
                  : "text-slate-700 dark:text-white"
              }
            >
              {navlink.title}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-md ${
              darkMode
                ? " "
                : "bg-white text-black border border-gray-300 hover:text-black hover:bg-white"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user.avatar || ""}
                    alt={user.username || "User"}
                  />
                  <AvatarFallback className="font-extrabold text-slate-900 text-lg bg-slate-100 text-center rounded-full border-2 border-teal-500 p-2">
                    {user.username?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="dark:bg-[#111827] dark:text-white"
              >
                <DropdownMenuLabel className="flex flex-col items-start gap-1 p-2 text-sm">
                  <span className="font-semibold">{user.username}</span>
                  <span className="text-gray-500 text-xs">{user.email}</span>
                </DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigate("/dashboard?tab=profile")}
                >
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/sign-in">
              <Button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Sign In
              </Button>
            </Link>
          )}
        </div>

        <div className="md:hidden flex items-center gap-4">
          <Button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-md ${
              darkMode ? "   " : "bg-white text-black border border-gray-300"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage
                    src={user.avatar || ""}
                    alt={user.username || "User"}
                  />
                  <AvatarFallback className="font-extrabold text-slate-900 text-lg bg-slate-100 text-center rounded-full border-2 border-teal-500 p-2">
                    {user.username?.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="dark:bg-[#111827] dark:text-white"
              >
                <DropdownMenuLabel className="flex flex-col items-start gap-1 p-2 text-sm">
                  <span className="font-semibold">{user.username}</span>
                  <span className="text-gray-500 text-xs">{user.email}</span>
                </DropdownMenuLabel>
                <DropdownMenuItem
                  onClick={() => navigate("/dashboard?tab=profile")}
                >
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/sign-in">
              <Button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Sign In
              </Button>
            </Link>
          )}

          <IoMenu
            onClick={() => setIsOpen(true)}
            className="h-8 w-8 font-bold text-slate-700 dark:text-white"
          />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild></SheetTrigger>
            <SheetContent className="dark:bg-[#111827] dark:text-white">
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>

              <div className="flex flex-col gap-4 mt-10 font-semibold items-center text-lg">
                {navlinks.map((navlink) => (
                  <NavLink
                    to={navlink.path}
                    key={navlink.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "text-blue-500 dark:text-blue-400"
                        : "text-gray-500 hover:text-blue-500 dark:text-white dark:hover:text-blue-400"
                    }
                  >
                    {navlink.title}
                  </NavLink>
                ))}
              </div>
              <SheetFooter></SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
