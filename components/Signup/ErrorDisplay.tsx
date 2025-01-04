interface ErrorDisplayProps {
  error: string;
}

export default function ErrorDisplay({ error }: ErrorDisplayProps) {
  return error ? <p className="text-red-500 text-sm mt-4">{error}</p> : null;
}
