
// ✅ File: src/pages/Home.tsx
import { Link } from "react-router-dom";
import { Upload, MessageCircle, Target, BarChart3, ArrowRight, Sparkles } from "lucide-react";
import GradientCard from "../components/GradientCard";

const Home = () => {
  const features = [
    {
      icon: Upload,
      title: "Upload Resume",
      description: "Upload your resume and get AI-powered analysis of your skills and experience",
      link: "/upload-resume",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      icon: Target,
      title: "Career Suggestions",
      description: "Discover AI career paths tailored to your background and interests",
      link: "/suggestions",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      icon: MessageCircle,
      title: "AI Mentor Chat",
      description: "Chat with our intelligent mentor for personalized career guidance",
      link: "/chat-mentor",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      icon: BarChart3,
      title: "Admin Panel",
      description: "Monitor user activities and system performance",
      link: "/admin",
      gradient: "from-orange-500/10 to-red-500/10"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-6">
          <Sparkles className="w-5 h-5 text-purple-500" />
          <span className="text-sm font-medium text-purple-700">Intelligent Career Guidance</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Your{" "}
          <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            AI Career Mentor
          </span>
          <br />
          Awaits
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Discover personalized AI career paths, get expert guidance, and accelerate your 
          professional growth with our intelligent mentoring system.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/upload-resume"
            className="group bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            to="/suggestions"
            className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-purple-300 hover:text-purple-600 transition-all duration-200"
          >
            Explore Careers
          </Link>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, index) => (
          <Link key={index} to={feature.link} className="group">
            <GradientCard 
              gradient={feature.gradient}
              className="h-full group-hover:scale-105 transition-transform duration-200"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-white/80 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
                  <feature.icon className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                <div className="flex items-center text-purple-600 font-medium text-sm group-hover:text-purple-700">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </GradientCard>
          </Link>
        ))}
      </div>

      {/* Stats Section */}
      <GradientCard gradient="from-indigo-500/10 to-purple-500/10" className="text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-gray-800 mb-2">1000+</div>
            <div className="text-gray-600">Career Paths Analyzed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-800 mb-2">95%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-800 mb-2">24/7</div>
            <div className="text-gray-600">AI Mentor Available</div>
          </div>
        </div>
      </GradientCard>
    </div>
  );
};

export default Home;
