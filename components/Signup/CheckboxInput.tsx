import Link from "next/link";

interface CheckboxInputProps {
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckboxInput({
  label,
  name,
  onChange,
}: CheckboxInputProps) {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={name}
        name={name}
        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
        onChange={onChange}
      />
      <Link href={"/privacyPolicyAndTerms"}>
        <label
          htmlFor={name}
          className="ml-2 text-sm text-gray-900 hover:text-gray-600 cursor-pointer"
        >
          {label}
        </label>
      </Link>
    </div>
  );
}
