
// ✅ File: src/components/Loader.tsx
interface LoaderProps {
  size?: "sm" | "md" | "lg";
  text?: string;
}

const Loader = ({ size = "md", text }: LoaderProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="w-full h-full border-4 border-gray-200 border-t-purple-500 rounded-full"></div>
      </div>
      {text && (
        <p className="text-gray-600 text-sm font-medium">{text}</p>
      )}
    </div>
  );
};

export default Loader;
