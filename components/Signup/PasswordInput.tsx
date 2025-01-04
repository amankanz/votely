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

/*
{
  /* Password Fields =/
}
<div className="flex flex-col md:flex-row md:gap-6">
  <div className="w-full md:max-w-[24rem] relative">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Password
    </label>
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      placeholder="Enter your password"
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
      onChange={handleChange}
    />
  </div>

  <div className="w-full md:max-w-[24rem] relative">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Confirm Password
    </label>
    <input
      type={showPassword ? "text" : "password"}
      name="confirmPassword"
      placeholder="Confirm your password"
      className="w-full px-4 py-2 border border-gray-300 rounded-md"
      onChange={handleChange}
    />
  </div>
</div>;

{
  /* Toggle Password Visibility =/
}
<div className="flex items-center gap-2">
  <input
    type="checkbox"
    id="showPassword"
    checked={showPassword}
    onChange={() => setShowPassword(!showPassword)}
    className="h-4 w-4"
  />
  <label htmlFor="showPassword" className="text-sm text-gray-700">
    Show Password
  </label>
</div>;
*/
