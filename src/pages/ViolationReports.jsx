import React from "react";
import { Download, AlertTriangle, CheckCircle } from "lucide-react";

export default function ViolationReports() {
  const reports = [
    {
      id: "V-8992",
      empId: "#4022",
      name: "A. Sharma",
      dept: "Tax",
      duration: "45 mins",
      status: "Pending Review",
      date: "Today, 10:42 AM",
    },
    {
      id: "V-8991",
      empId: "#1093",
      name: "R. Patil",
      dept: "Water",
      duration: "32 mins",
      status: "Cleared",
      date: "Today, 09:15 AM",
    },
    {
      id: "V-8990",
      empId: "#8821",
      name: "S. Desai",
      dept: "Sanitation",
      duration: "1 hr 12 mins",
      status: "Pending Review",
      date: "Yesterday",
    },
  ];

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Violation Reports
        </h2>
        <button className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition">
          <Download size={16} /> Export CSV
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        <table className="w-full text-left text-sm text-gray-600">
          <thead className="bg-slate-50 text-gray-700 uppercase font-semibold border-b">
            <tr>
              <th className="px-6 py-4">Incident ID</th>
              <th className="px-6 py-4">Employee</th>
              <th className="px-6 py-4">Department</th>
              <th className="px-6 py-4">Absence Duration</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50 transition">
                <td className="px-6 py-4 font-mono font-medium">{report.id}</td>
                <td className="px-6 py-4">
                  <span className="block font-bold text-gray-900">
                    {report.name}
                  </span>
                  <span className="text-xs">{report.empId}</span>
                </td>
                <td className="px-6 py-4">{report.dept}</td>
                <td className="px-6 py-4 text-red-600 font-semibold">
                  {report.duration}
                </td>
                <td className="px-6 py-4">
                  {report.status === "Cleared" ? (
                    <span className="flex items-center gap-1 text-green-600 font-medium">
                      <CheckCircle size={14} /> Cleared
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-orange-500 font-medium">
                      <AlertTriangle size={14} /> Pending
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">{report.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
