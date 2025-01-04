interface SelectInputProps {
  label: string;
  name: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectInput({
  label,
  name,
  options,
  onChange,
}: SelectInputProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        onChange={onChange}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
