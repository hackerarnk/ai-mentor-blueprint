
// ✅ File: src/components/Footer.tsx
import { Brain, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-white/20 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Career Mentor
            </span>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-600">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for your career success</span>
          </div>
          
          <div className="text-sm text-gray-500 mt-4 md:mt-0">
            © 2024 AI Career Mentor. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
