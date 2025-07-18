
// ✅ File: src/components/Navbar.tsx
import { Link, useLocation } from "react-router-dom";
import { Brain, Menu, X, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/upload-resume", label: "Upload Resume" },
    { path: "/suggestions", label: "Career Suggestions" },
    { path: "/chat-mentor", label: "AI Mentor" },
    { path: "/admin", label: "Admin Panel" }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-800">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI Career Mentor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Links - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <Link
              to="/login"
              className="flex items-center space-x-1 px-4 py-2 text-gray-600 hover:text-gray-800 rounded-lg hover:bg-white/50 transition-all duration-200"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link
              to="/signup"
              className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
            >
              <UserPlus className="w-4 h-4" />
              <span>Sign Up</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                      : "text-gray-600 hover:text-gray-800 hover:bg-white/50"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Auth Links */}
              <div className="pt-2 border-t border-white/20 space-y-2">
                <Link
                  to="/login"
                  className="flex items-center space-x-1 px-4 py-2 text-gray-600 hover:text-gray-800 rounded-lg hover:bg-white/50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/signup"
                  className="flex items-center space-x-1 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Sign Up</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
