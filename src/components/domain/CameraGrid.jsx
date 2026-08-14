// src/components/domain/CameraGrid.jsx
import React, { useEffect, useState } from "react";

export default function CameraGrid() {
  const [position, setPosition] = useState({ x: 20, y: 20 });

  // Simulate AI bounding box tracking movement
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => ({
        x: prev.x < 80 ? prev.x + Math.random() * 5 : 20,
        y: prev.y < 80 ? prev.y + (Math.random() * 2 - 1) : 20,
      }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] bg-slate-900 rounded-lg overflow-hidden border-2 border-slate-700 shadow-inner">
      {/* Simulated Camera Feed Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black"></div>

      {/* HUD Overlay */}
      <div className="absolute top-4 left-4 text-white font-mono text-xs drop-shadow-md">
        <p>CAM_01: TAX_DEPT_MAIN</p>
        <p>FPS: 24 | MODEL: YOLOv8-Nano</p>
      </div>

      {/* Simulated Work Zone Geo-Fence */}
      <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border-2 border-dashed border-blue-500/50 flex items-end p-2">
        <span className="text-white text-xs font-mono font-bold uppercase drop-shadow-md">
          Work Zone Alpha
        </span>
      </div>

      {/* Simulated AI Bounding Box */}
      <div
        className="absolute border-2 border-green-500 transition-all duration-1000 ease-linear flex flex-col justify-between"
        style={{
          top: `${position.y}%`,
          left: `${position.x}%`,
          width: "80px",
          height: "140px",
          boxShadow: "0 0 10px rgba(34, 197, 94, 0.4)",
        }}
      >
        <div className="bg-green-500 text-black text-[10px] font-bold px-1 w-fit -mt-4">
          ID:4022 (98%)
        </div>
      </div>
    </div>
  );
}
