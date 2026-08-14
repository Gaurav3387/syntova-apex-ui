import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";

// Layout & Pages
import Sidebar from "./components/layout/Sidebar";
import CameraGrid from "./components/domain/CameraGrid";
import CameraFeeds from "./pages/CameraFeeds.jsx";
import ViolationReports from "./pages/ViolationReports.jsx";

export default function App() {
  // STATE: Controls which page is currently visible
  const [activeTab, setActiveTab] = useState("dashboard");

  // Dashboard Stats
  const [stats] = useState({ present: 145, away: 12, ghosting: 3 });

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      {/* Sidebar now controls the activeTab state */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header remains visible on all pages */}
        <header className="flex justify-between items-center p-6 bg-white border-b shadow-sm z-10">
          <h1 className="text-2xl font-semibold text-gray-800">
            Command Center
          </h1>
          <div className="flex items-center gap-2 text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-200">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            System Online
          </div>
        </header>

        {/* --- CONDITIONAL ROUTING --- */}

        {/* 1. Render Dashboard Page */}
        {activeTab === "dashboard" && (
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border-l-4 border-green-500 shadow-sm flex justify-between items-center">
                <div>
                  <div className="text-gray-500 text-sm uppercase font-semibold tracking-wider">
                    Active at Post
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mt-2">
                    {stats.present}
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl border-l-4 border-yellow-400 shadow-sm flex justify-between items-center">
                <div>
                  <div className="text-gray-500 text-sm uppercase font-semibold tracking-wider">
                    Temporary Away
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mt-2">
                    {stats.away}
                  </div>
                </div>
              </div>
              <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 shadow-sm ring-1 ring-red-200 flex justify-between items-center">
                <div>
                  <div className="text-red-600 text-sm uppercase font-bold tracking-wider flex items-center gap-2">
                    <AlertTriangle size={18} /> Ghosting Alerts
                  </div>
                  <div className="text-4xl font-bold text-red-600 mt-2">
                    {stats.ghosting}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2 bg-white rounded-xl shadow-sm border p-6 flex flex-col">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">
                  Live AI Analysis
                </h2>
                <CameraGrid />
              </div>
              <div className="bg-white rounded-xl shadow-sm border flex flex-col h-auto min-h-[400px]">
                <h2 className="text-lg font-semibold p-6 border-b text-gray-800">
                  Live Incident Log
                </h2>
                <div className="p-6 space-y-4 overflow-y-auto flex-1">
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg shadow-sm">
                    <div className="flex justify-between text-xs font-bold text-red-500 mb-2 uppercase tracking-wider">
                      <span>10:42 AM</span>
                      <span>Tax Dept</span>
                    </div>
                    <div className="text-sm font-bold text-gray-900">
                      Emp #4022 (A. Sharma)
                    </div>
                    <div className="text-sm text-red-700 mt-1">
                      Away from desk for 45 mins. Threshold exceeded.
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
                    <div className="flex justify-between text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
                      <span>10:35 AM</span>
                      <span>Water Dept</span>
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      Emp #1093 Returned to Post
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        )}

        {/* 2. Render Camera Feeds Page */}
        {activeTab === "cameras" && <CameraFeeds />}

        {/* 3. Render Violation Reports Page */}
        {activeTab === "reports" && <ViolationReports />}

        {/* 4. Render Settings Placeholder */}
        {activeTab === "settings" && (
          <div className="flex-1 p-6 flex items-center justify-center">
            <p className="text-gray-500 font-medium">
              Settings & Threshold Configuration Engine (Coming Soon)
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
