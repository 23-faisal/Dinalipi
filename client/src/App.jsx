import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/common/Navbar";
import useThemeStore from "./store/themeStore";
import { useEffect } from "react";

function App() {
  const darkMode = useThemeStore((state) => state.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`flex flex-col h-screen transition-colors duration-500 ease-in-out bg-white dark:bg-[#111827]`}
    >
      <Navbar />
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
