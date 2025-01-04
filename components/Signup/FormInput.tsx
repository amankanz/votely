interface FormInputProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  label,
  name,
  placeholder,
  type = "text",
  onChange,
}: FormInputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        onChange={onChange}
      />
    </div>
  );
}
