/*
import React from "react";

interface Review {
  id: number;
  customerName: string;
  review: string;
  rating: number;
  serviceName: string;
  datePosted: string;
}

interface ReviewTableProps {
  reviews: Review[];
}

const ReviewTable: React.FC<ReviewTableProps> = ({ reviews }) => {
  return (
    <section>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Review
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Rating
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Service/Product
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Posted
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Reply
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                    {review.customerName.charAt(0).toUpperCase()}
                  </div>
                  <p
                    className={`${
                      review.rating >= 3 ? "text-blue-500" : "text-red-600"
                    }`}
                  >
                    {review.review}
                  </p>
                </div>
              </td>
              <td
                className={`px-4 py-4 ${
                  review.rating >= 3 ? "text-green-500" : "text-red-600"
                } `}
              >{`${review.rating} stars`}</td>
              <td className="px-4 py-4 text-gray-600">{review.serviceName}</td>
              <td className="px-4 py-4 text-gray-600">{review.datePosted}</td>
              <td className="px-4 py-4">
                <button className="text-blue-700 hover:underline hover:text-blue-950">
                  Reply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ReviewTable;
*/

/*
import React from "react";

interface Review {
  id: number;
  customerName: string;
  review: string;
  rating: number;
  serviceName: string;
  datePosted: string;
  isRead: boolean;
  isReplied: boolean;
}

interface ReviewTableProps {
  reviews: Review[];
  setReviews: React.Dispatch<React.SetStateAction<Review[]>>;
}

const ReviewTable: React.FC<ReviewTableProps> = ({ reviews, setReviews }) => {
  const handleReply = (id: number) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id ? { ...review, isReplied: true } : review
      )
    );
  };

  return (
    <section>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Review
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Rating
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Service/Product
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Posted
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Reply
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id} className="border-b hover:bg-gray-50">
              <td
                className={`px-4 py-4 ${
                  review.isRead ? "text-gray-600" : "text-blue-500"
                }`}
              >
                {review.review}
              </td>
              <td className="px-4 py-4 text-gray-600">{`${review.rating} stars`}</td>
              <td className="px-4 py-4 text-gray-600">{review.serviceName}</td>
              <td className="px-4 py-4 text-gray-600">{review.datePosted}</td>
              <td className="px-4 py-4">
                <button
                  onClick={() => handleReply(review.id)}
                  className={`text-sm ${
                    review.isReplied
                      ? "text-green-600 cursor-default"
                      : "text-blue-700 hover:underline"
                  }`}
                  disabled={review.isReplied}
                >
                  {review.isReplied ? "Replied" : "Reply"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ReviewTable;
*/

/*
import React from "react";

interface Review {
  id: number;
  customerName: string;
  review: string;
  rating: number;
  serviceName: string;
  datePosted: string;
  isRead: boolean;
  isReplied: boolean;
}

interface ReviewTableProps {
  reviews: Review[];
}

const ReviewTable: React.FC<ReviewTableProps> = ({ reviews }) => {
  return (
    <section>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Review
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Rating
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Service/Product
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Posted
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Reply
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id} className="border-b hover:bg-gray-50">
              <td
                className={`px-4 py-4 ${
                  review.isRead ? "text-gray-600" : "text-blue-600"
                }`}
              >
                <div className="flex items-center gap-4 w-full max-w-[20rem]">
                  <div className="w-[4rem] max-w-[4rem] h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                    {review.customerName.charAt(0).toUpperCase()}
                  </div>
                  <p className="w-full max-w-[20rem]">{review.review}</p>
                </div>
              </td>
              <td
                className={`px-4 py-4 text-sm sm:text-base text-nowrap ${
                  review.rating >= 3 ? "text-green-500" : "text-red-600"
                }`}
              >
                {`${review.rating} stars`}
              </td>
              <td className="px-4 py-4 text-gray-600">{review.serviceName}</td>
              <td className="px-4 py-4 text-gray-600 text-sm sm:text-base text-nowrap">
                {review.datePosted}
              </td>
              <td className="px-4 py-4">
                <button
                  className={`text-sm ${
                    review.isReplied
                      ? "text-green-500 cursor-default"
                      : "text-blue-700 hover:underline"
                  }`}
                >
                  {review.isReplied ? "Replied" : "Reply"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ReviewTable;
*/

/*
import React, { useState } from "react";
import ReplyModal from "@/components/Business-dashboard/Reviews/ReplyModal";

interface Review {
  id: number;
  customerName: string;
  review: string;
  rating: number;
  serviceName: string;
  datePosted: string;
  isRead: boolean;
  isReplied: boolean;
  reply?: {
    content: string;
    dateReplied: string;
  };
}

interface ReviewTableProps {
  reviews: Review[];
}

const ReviewTable: React.FC<ReviewTableProps> = ({ reviews }) => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [replyContent, setReplyContent] = useState("");

  const handleReplyClick = (review: Review) => {
    setSelectedReview(review);
    setReplyContent(review.reply?.content || "");
  };

  const handleSaveReply = () => {
    if (selectedReview) {
      selectedReview.isReplied = true;
      selectedReview.reply = {
        content: replyContent,
        dateReplied: new Date().toLocaleDateString(),
      };
      setSelectedReview(null);
      setReplyContent("");
    }
  };

  return (
    <section>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Review
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Rating
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Service/Product
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Posted
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Reply
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id} className="border-b hover:bg-gray-50">
              <td
                className={`px-4 py-4 ${
                  review.isRead ? "text-gray-600" : "text-blue-600"
                }`}
              >
                <div className="flex items-center gap-4 w-full max-w-[20rem]">
                  <div className="w-[4rem] max-w-[4rem] h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                    {review.customerName.charAt(0).toUpperCase()}
                  </div>
                  <p className="w-full max-w-[20rem]">{review.review}</p>
                </div>
              </td>
              <td
                className={`px-4 py-4 text-sm sm:text-base text-nowrap ${
                  review.rating >= 3 ? "text-green-500" : "text-red-600"
                }`}
              >
                {`${review.rating} stars`}
              </td>
              <td className="px-4 py-4 text-gray-600">{review.serviceName}</td>
              <td className="px-4 py-4 text-gray-600 text-sm sm:text-base text-nowrap">
                {review.datePosted}
              </td>
              <td className="px-4 py-4">
                <button
                  className={`text-sm ${
                    review.isReplied
                      ? "text-green-500 cursor-default"
                      : "text-blue-700 hover:underline"
                  }`}
                  onClick={() => !review.isReplied && handleReplyClick(review)}
                >
                  {review.isReplied ? "Replied" : "Reply"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedReview && (
        <ReplyModal
          review={selectedReview}
          replyContent={replyContent}
          setReplyContent={setReplyContent}
          onSave={handleSaveReply}
          onCancel={() => setSelectedReview(null)}
        />
      )}
    </section>
  );
};

export default ReviewTable;
*/

/*
import React, { useState } from "react";
import ReplyModal from "@/components/Business-dashboard/Reviews/ReplyModal";

interface Review {
  id: number;
  customerName: string;
  review: string;
  rating: number;
  serviceName: string;
  datePosted: string;
  isRead: boolean;
  isReplied: boolean;
  reply?: {
    content: string;
    dateReplied: string;
  };
}

interface ReviewTableProps {
  reviews: Review[];
}

const ReviewTable: React.FC<ReviewTableProps> = ({ reviews }) => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [replyContent, setReplyContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleReplyClick = (review: Review) => {
    setSelectedReview(review);
    setReplyContent(review.reply?.content || "");
    setIsEditing(false); // Initial state is not editing
  };

  const handleSaveReply = () => {
    if (selectedReview) {
      selectedReview.isReplied = true;
      selectedReview.reply = {
        content: replyContent,
        dateReplied: new Date().toLocaleDateString(),
      };
      setSelectedReview(null);
      setReplyContent("");
      setIsEditing(false); // Reset editing state
    }
  };

  return (
    <section>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Review
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Rating
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Service/Product
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Posted
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Reply
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id} className="border-b hover:bg-gray-50">
              <td
                className={`px-4 py-4 ${
                  review.isRead ? "text-gray-600" : "text-blue-600"
                }`}
              >
                <div className="flex items-center gap-4 w-full max-w-[20rem]">
                  <div className="w-[4rem] h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                    {review.customerName.charAt(0).toUpperCase()}
                  </div>
                  <p className="w-full max-w-[20rem]">{review.review}</p>
                </div>
              </td>
              <td
                className={`px-4 py-4 text-sm text-nowrap ${
                  review.rating >= 3 ? "text-green-500" : "text-red-600"
                }`}
              >
                {`${review.rating} stars`}
              </td>
              <td className="px-4 py-4 text-gray-600">{review.serviceName}</td>
              <td className="px-4 py-4 text-gray-600 text-sm text-nowrap">
                {review.datePosted}
              </td>
              <td className="px-4 py-4">
                <button
                  className={`text-sm ${
                    review.isReplied
                      ? "text-green-500"
                      : "text-blue-700 hover:underline"
                  }`}
                  onClick={() => handleReplyClick(review)}
                >
                  {review.isReplied ? "Replied" : "Reply"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedReview && (
        <ReplyModal
          review={selectedReview}
          replyContent={replyContent}
          setReplyContent={setReplyContent}
          onSave={handleSaveReply}
          onCancel={() => setSelectedReview(null)}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </section>
  );
};

export default ReviewTable;
*/

import React, { useState } from "react";
import ReplyModal from "@/components/Business-dashboard/Reviews/ReplyModal";

interface Review {
  id: number;
  customerName: string;
  review: string;
  rating: number;
  serviceName: string;
  datePosted: string;
  isRead: boolean;
  isReplied: boolean;
  reply?: {
    content: string;
    dateReplied: string;
  };
}

interface ReviewTableProps {
  reviews: Review[];
}

const ReviewTable: React.FC<ReviewTableProps> = ({ reviews }) => {
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [replyContent, setReplyContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleReplyClick = (review: Review) => {
    setSelectedReview(review);
    setReplyContent(review.reply?.content || "");
    setIsEditing(false); // Initial state is not editing
  };

  const handleSaveReply = () => {
    if (selectedReview) {
      if (replyContent.trim() === "") {
        selectedReview.isReplied = false;
        selectedReview.reply = undefined;
      } else {
        // Otherwise, save the reply
        selectedReview.isReplied = true;
        selectedReview.reply = {
          content: replyContent.trim(),
          // dateReplied: new Date().toLocaleDateString(),
          dateReplied: new Intl.DateTimeFormat("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }).format(new Date()),
        };
      }

      // Reset modal states
      setSelectedReview(null);
      setReplyContent("");
      setIsEditing(false); // Reset editing state
    }
  };

  return (
    <section>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Review
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Rating
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Service/Product
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Posted
            </th>
            <th className="px-4 py-2 text-sm font-medium text-gray-700">
              Reply
            </th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review.id} className="border-b hover:bg-gray-50">
              <td
                className={`px-4 py-4 ${
                  review.isRead ? "text-gray-600" : "text-blue-600"
                }`}
              >
                <div className="flex items-center gap-4 w-full max-w-[20rem]">
                  <div className="flex items-center justify-center ">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                      {review.customerName.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <p className="w-full max-w-[20rem]">{review.review}</p>
                </div>
              </td>
              <td
                className={`px-4 py-4 text-sm text-nowrap ${
                  review.rating >= 3 ? "text-green-500" : "text-red-600"
                }`}
              >
                {`${review.rating} stars`}
              </td>
              <td className="px-4 py-4 text-gray-600">{review.serviceName}</td>
              <td className="px-4 py-4 text-gray-600 text-sm text-nowrap">
                {review.datePosted}
              </td>
              <td className="px-4 py-4">
                <button
                  className={`text-sm ${
                    review.isReplied
                      ? "text-green-500"
                      : "text-blue-700 hover:underline"
                  }`}
                  onClick={() => handleReplyClick(review)}
                >
                  {review.isReplied ? "Replied" : "Reply"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedReview && (
        <ReplyModal
          review={selectedReview}
          replyContent={replyContent}
          setReplyContent={setReplyContent}
          onSave={handleSaveReply}
          onCancel={() => setSelectedReview(null)}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </section>
  );
};

export default ReviewTable;
