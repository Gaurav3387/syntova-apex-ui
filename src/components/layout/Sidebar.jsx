import React from "react";
import { LayoutDashboard, Video, FileText, Settings } from "lucide-react";

// Import the logo from your assets folder
import logo from "../../assets/Logo_Syntova-removebg-preview (2).png";

export default function Sidebar({ activeTab, setActiveTab }) {
  // Helper function to style tabs dynamically
  const getTabClass = (tabName) => {
    return activeTab === tabName
      ? "flex items-center gap-3 p-3 bg-blue-600 text-white rounded-lg shadow cursor-pointer transition"
      : "flex items-center gap-3 p-3 hover:bg-slate-800 text-gray-300 rounded-lg cursor-pointer transition";
  };

  return (
    <div className="w-72 bg-slate-900 text-white flex flex-col">
      {/* Updated Branding Header with Logo */}
      <div className="p-5 border-b border-slate-700 bg-slate-950 flex items-center gap-3">
        {/* Render the Syntova Logo */}
        <img
          src={logo}
          alt="Syntova Logo"
          className="w-11 h-11 object-contain drop-shadow-lg"
        />

        {/* Brand Text */}
        <div className="flex flex-col">
          <div className="text-xl font-bold tracking-wide text-white flex items-baseline gap-1.5">
            SYNTOVA <span className="text-blue-500 font-black">APEX</span>
          </div>
          <div className="text-[9px] text-slate-400 mt-0.5 uppercase tracking-[0.2em] font-semibold">
            Govt Attendance AI
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2">
        <div
          onClick={() => setActiveTab("dashboard")}
          className={getTabClass("dashboard")}
        >
          <LayoutDashboard size={20} /> Live Dashboard
        </div>

        <div
          onClick={() => setActiveTab("cameras")}
          className={getTabClass("cameras")}
        >
          <Video size={20} /> Camera Feeds
        </div>

        <div
          onClick={() => setActiveTab("reports")}
          className={getTabClass("reports")}
        >
          <FileText size={20} /> Violation Reports
        </div>

        <div
          onClick={() => setActiveTab("settings")}
          className={getTabClass("settings")}
        >
          <Settings size={20} /> Settings
        </div>
      </nav>
    </div>
  );
}
