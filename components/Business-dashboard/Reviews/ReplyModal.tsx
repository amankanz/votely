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
  reply?: {
    content: string;
    dateReplied: string;
  };
}

// interface ReviewTableProps {
//   reviews: Review[];
// }

interface ReplyModalProps {
  review: Review;
  replyContent: string;
  setReplyContent: (content: string) => void;
  onSave: () => void;
  onCancel: () => void;
}

const ReplyModal: React.FC<ReplyModalProps> = ({
  review,
  replyContent,
  setReplyContent,
  onSave,
  onCancel,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4">Reply to Review</h2>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <strong>Customer:</strong> {review.customerName}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Posted on:</strong> {review.datePosted}
          </p>
          <p className="text-sm text-gray-600">
            <strong>Rating:</strong> {review.rating} stars
          </p>
          <p className="text-sm text-gray-600">
            <strong>Review:</strong> {review.review}
          </p>
        </div>
        <textarea
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          className="w-full border rounded p-2 mb-4 text-sm"
          placeholder="Type your reply here..."
        ></textarea>
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={onSave}
          >
            Save Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;
*/

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
  reply?: {
    content: string;
    dateReplied: string;
  };
}

interface ReplyModalProps {
  review: Review;
  replyContent: string;
  setReplyContent: (content: string) => void;
  onSave: () => void;
  onCancel: () => void;
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
}

const ReplyModal: React.FC<ReplyModalProps> = ({
  review,
  replyContent,
  setReplyContent,
  onSave,
  onCancel,
  isEditing,
  setIsEditing,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
        <h2 className="text-lg font-bold mb-4">
          {isEditing ? "Edit Reply" : "Reply to Review"}
        </h2>
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center ">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 text-gray-600">
                {review.customerName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-gray-600">
                {review.customerName}
              </p>
              <p className="text-sm text-blue-600">{review.datePosted}</p>
            </div>
          </div>

          <div
            className={`mb-3 ${
              review.rating >= 3 ? "text-gray-600" : "text-red-400"
            }`}
          >
            <span className="font-bold text-5xl mr-2">{review.rating}</span>
            <span>
              <strong>stars</strong> rating
            </span>
          </div>
          <p className="text-gray-600">
            <strong>Review:</strong> {review.review}
          </p>
        </div>
        {!isEditing && review.reply?.content ? (
          <div className="mb-4">
            <p className="text-gray-600 mb-2">
              <strong>Your Reply:</strong> {review.reply.content}
            </p>
            <p className="text-xs text-gray-500 mb-4">
              <strong className="mr-2">Replied on:</strong>
              <span className="text-blue-600">{review.reply.dateReplied}</span>
            </p>
            <button
              className="text-blue-600 text-sm mt-2 hover:underline"
              onClick={() => setIsEditing(true)}
            >
              Edit Reply
            </button>
          </div>
        ) : (
          <textarea
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            className="w-full border rounded p-2 mb-4 text-sm border-gray-300 bg-blue-50 focus:border-blue-500 focus:ring focus:ring-blue-400 focus:outline-none"
            placeholder="Type your reply here..."
          />
        )}
        <div className="flex justify-end gap-4">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
            onClick={onCancel}
          >
            Cancel
          </button>
          {(isEditing || !review.reply?.content) && (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={onSave}
            >
              Save {isEditing ? "Changes" : "Reply"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReplyModal;
