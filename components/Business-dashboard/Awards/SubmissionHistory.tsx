/*
import React from "react";

const mockSubmissions = [
  { title: "Top Rated Award", status: "Pending", date: "2025-01-01" },
  { title: "Best of the Year", status: "Under Review", date: "2025-01-03" },
];

const SubmissionHistory: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <ul className="space-y-3">
        {mockSubmissions.map((submission, index) => (
          <li key={index} className="flex justify-between">
            <span>{submission.title}</span>
            <span className="text-gray-600">{submission.status}</span>
            <span className="text-gray-400">{submission.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionHistory;
*/

import React from "react";

interface Submission {
  award: string;
  status: "Pending" | "Won" | "Submitted";
  date: string;
}

const submissions: Submission[] = [
  { award: "Best New Product", status: "Pending", date: "April 1, 2023" },
  { award: "Best Tech Startup", status: "Won", date: "March 15, 2023" },
  {
    award: "Best User Experience",
    status: "Submitted",
    date: "February 28, 2023",
  },
];

const SubmissionHistory: React.FC = () => {
  return (
    <div className="bg-white rounded-md shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Submission History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left py-3 px-4 text-gray-600 font-medium">
                Award
              </th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">
                Status
              </th>
              <th className="text-left py-3 px-4 text-gray-600 font-medium">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr key={index} className="border-t border-gray-200">
                <td className="py-3 px-4 text-gray-800">{submission.award}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      submission.status === "Pending"
                        ? "bg-gray-100 text-gray-600"
                        : submission.status === "Won"
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {submission.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-800">{submission.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubmissionHistory;
