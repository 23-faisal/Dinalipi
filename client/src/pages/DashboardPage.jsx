// DashboardPage.js
import DashProfile from "@/components/common/DashProfile";
import DashSidebar from "@/components/common/DashSidebar";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const DashboardPage = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabParam = urlParams.get("tab");
    if (tabParam) {
      setTab(tabParam);
    }
  }, [location.search]);

  return (
    <div className="flex min-h-[calc(100vh-12rem)] w-full ">
      <DashSidebar /> {/* Sidebar Component */}
      <div className="flex-1 p-4">
        {tab === "profile" && <DashProfile />}{" "}
        {/* Render content based on tab */}
      </div>
    </div>
  );
};

export default DashboardPage;
