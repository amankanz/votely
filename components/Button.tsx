type ButtonProps = {
  text: string;
  variant: "primary" | "secondary";
};

export default function Button({ text, variant }: ButtonProps) {
  const baseStyle = "px-4 py-2 rounded-md font-medium";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-white text-blue-500 border border-blue-500 hover:bg-blue-50",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]}`}>{text}</button>
  );
}
