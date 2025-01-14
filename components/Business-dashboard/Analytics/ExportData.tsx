import React from "react";
import { LiaFileDownloadSolid } from "react-icons/lia";

const ExportData: React.FC = () => {
  const handleExport = (format: string) => {
    alert(`Exporting data as ${format}`);
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      <button
        onClick={() => handleExport("CSV")}
        className="flex flex-col items-start justify-center bg-white shadow rounded-lg p-6 hover:bg-gray-100 border-[1px] border-blue-500"
      >
        <div>
          <LiaFileDownloadSolid size={24} />
        </div>
        <h3 className="text-lg font-medium mt-2">Download as CSV</h3>
        <p className="text-sm text-blue-500">
          Export your insights data in a CSV format
        </p>
      </button>
      <button
        onClick={() => handleExport("PDF")}
        className="flex flex-col items-start justify-center bg-white shadow rounded-lg p-6 hover:bg-gray-100 border-[1px] border-blue-500"
      >
        <div>
          <LiaFileDownloadSolid size={24} />
        </div>
        <h3 className="text-lg font-medium mt-2">Download as PDF</h3>
        <p className="text-sm text-blue-500">
          Export your insights data in a PDF format
        </p>
      </button>
    </section>
  );
};

export default ExportData;
