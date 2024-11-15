// DashSidebar.js
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { RiSidebarFoldFill, RiSidebarUnfoldFill } from "react-icons/ri";
import { MdSpaceDashboard } from "react-icons/md";

const DashSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

  // Toggle sidebar visibility
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <div
      className={`transition-all duration-300 ${
        isOpen ? "w-64" : "w-16"
      }       h-full flex flex-col`}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <MdSpaceDashboard className={`${isOpen ? "" : "block sm:hidden"} `} />
          <span
            className={`${
              isOpen ? "block" : "hidden"
            } flex gap-2 items-center text-lg font-bold`}
          >
            <span>Dashboard</span>
          </span>
        </div>
        <button
          onClick={toggleSidebar}
          className="p-2  hidden sm:block cursor-pointer"
        >
          {isOpen ? <RiSidebarFoldFill /> : <RiSidebarUnfoldFill />}
        </button>
      </div>

      <nav className="flex-1">
        <ul>
          {/* Conditionally render 'User' badge only when the sidebar is open */}

          <li>
            <Link
              to="?tab=profile"
              className={`flex items-center py-2 px-4 hover:bg-gray-700 ${
                location.search === "?tab=profile" &&
                "bg-slate-200 dark:bg-gray-700"
              }`}
            >
              <User className="mr-2" /> {/* Profile Icon */}
              {isOpen && "Profile"}
            </Link>
          </li>

          {/* Add more navigation links here */}
        </ul>
      </nav>

      <div className="p-4">
        <button className="w-full py-2 text-center bg-red-500 hover:bg-red-600 rounded flex items-center justify-center   text-white">
          <LogOut className="text-center " /> {/* Logout Icon */}
          <span className={`${isOpen && "ml-2"}     hidden sm:block`}>
            {isOpen && "Logout"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default DashSidebar;
