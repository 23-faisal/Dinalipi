import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { RiSidebarFoldFill, RiSidebarUnfoldFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";

const DashSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

   

  return (
    <div
      className={`transition-all w-16 duration-300 ${
        isOpen ? "sm:w-64" : "sm:w-16 "
      } h-full  flex flex-col   `}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <MdSpaceDashboard className="text-lg" />
          <span
            className={`${
              isOpen ? "block" : "hidden"
            } text-lg font-bold sm:block hidden`}
          >
            Dashboard
          </span>
        </div>
         
      </div>

      <nav className="flex-1">
        <ul>
          <li>
            <Link
              to="?tab=profile"
              className={`flex items-center py-2 px-4 hover:bg-gray-700 ${
                location.search === "?tab=profile" &&
                "bg-slate-200 dark:bg-gray-700"
              }`}
            >
              <User className="text-lg" /> {/* Profile Icon */}
              <span className={`${isOpen ? "ml-2" : ""} sm:block hidden`}>
                Profile
              </span>
            </Link>
          </li>

          {/* Add more navigation links here */}
        </ul>
      </nav>

      <div className="p-4">
        <button className="w-full py-2 bg-red-500 hover:bg-red-600 rounded flex items-center justify-center text-white">
          <LogOut className="text-lg" /> {/* Logout Icon */}
          <span className={`${isOpen ? "ml-2" : ""} sm:block hidden`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default DashSidebar;
