interface SubmitButtonProps {
  isLoading: boolean;
  onClick: () => void;
  label: string;
}

export default function SubmitButton({
  isLoading,
  onClick,
  label,
}: SubmitButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isLoading}
      className={`w-full py-2 rounded-md ${
        isLoading
          ? "bg-gray-300 text-gray-600 cursor-not-allowed"
          : "bg-blue-500 text-white"
      }`}
    >
      {isLoading ? "Processing..." : label}
    </button>
  );
}
