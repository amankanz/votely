interface PasswordInputProps {
  label: string;
  name: string;
  placeholder: string;
  showPassword: boolean;
  toggleVisibility: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({
  label,
  name,
  placeholder,
  showPassword,
  toggleVisibility,
  onChange,
}: PasswordInputProps) {
  return (
    <div className="w-full relative">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={name}
        type={showPassword ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-md"
        onChange={onChange}
      />

      {/* Toggle Password Visibility */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="text-gray-600"
          onClick={toggleVisibility}
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>
    </div>
  );
}
