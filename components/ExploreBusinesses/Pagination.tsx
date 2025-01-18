// components/Pagination.tsx
import React from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  const handlePageChange = (page: number) => {
    if (page !== currentPage && page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="p-2 text-gray-500 hover:text-black"
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {pages.map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className={` p-2 rounded-full ${
              page === currentPage
                ? "bg-blue-500 text-white font-bold"
                : "text-blue-500 hover:text-black"
            }`}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="p-2 text-gray-500">
            {page}
          </span>
        )
      )}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="p-2 text-gray-500 hover:text-black"
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
