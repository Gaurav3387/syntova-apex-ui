import React from "react";
import CameraGrid from "../components/domain/CameraGrid";

export default function CameraFeeds() {
  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Live CCTV Network
      </h2>

      <div className="grid grid-cols-2 gap-6">
        {/* We can reuse your existing CameraGrid component! */}
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="text-sm font-bold text-gray-500 mb-3">
            CAM_01: TAX DEPT MAIN
          </h3>
          <CameraGrid />
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="text-sm font-bold text-gray-500 mb-3">
            CAM_02: WATER DEPT HALL
          </h3>
          <CameraGrid />
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="text-sm font-bold text-gray-500 mb-3">
            CAM_03: RECORDS ROOM
          </h3>
          <CameraGrid />
        </div>
        <div className="bg-white rounded-xl shadow-sm border p-4">
          <h3 className="text-sm font-bold text-gray-500 mb-3">
            CAM_04: MAIN ENTRANCE
          </h3>
          <div className="h-[400px] bg-slate-900 rounded-lg flex items-center justify-center text-gray-500 border-2 border-dashed border-slate-700">
            Feed Offline / Reconnecting...
          </div>
        </div>
      </div>
    </div>
  );
}
