
// ✅ File: src/components/GradientCard.tsx
import { ReactNode } from "react";

interface GradientCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  gradient?: string;
}

const GradientCard = ({ 
  title, 
  children, 
  className = "", 
  gradient = "from-purple-500/10 to-blue-500/10" 
}: GradientCardProps) => {
  return (
    <div className={`bg-gradient-to-br ${gradient} backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}>
      {title && (
        <h3 className="text-xl font-semibold text-gray-800 mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          {title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default GradientCard;
