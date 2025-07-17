
// ✅ File: src/pages/Suggestions.tsx
import { useState } from "react";
import { Brain, Code, Database, Sparkles, TrendingUp, Users, Zap, ChevronRight, Star } from "lucide-react";
import GradientCard from "../components/GradientCard";

interface CareerSuggestion {
  id: string;
  title: string;
  description: string;
  icon: any;
  matchPercentage: number;
  skills: string[];
  avgSalary: string;
  growth: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  gradient: string;
}

const Suggestions = () => {
  const [selectedSuggestion, setSelectedSuggestion] = useState<string | null>(null);

  const careerSuggestions: CareerSuggestion[] = [
    {
      id: "ml-engineer",
      title: "Machine Learning Engineer",
      description: "Design and implement machine learning models to solve complex business problems. Work with large datasets and cutting-edge AI technologies.",
      icon: Brain,
      matchPercentage: 95,
      skills: ["Python", "TensorFlow", "PyTorch", "Data Science", "Statistics"],
      avgSalary: "$120k - $180k",
      growth: "+22% (2023-2033)",
      difficulty: "Advanced",
      gradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      id: "ai-researcher",
      title: "AI Research Scientist",
      description: "Conduct research in artificial intelligence, develop new algorithms, and publish findings in top-tier conferences and journals.",
      icon: Sparkles,
      matchPercentage: 88,
      skills: ["Deep Learning", "Research", "Mathematics", "Python", "Publications"],
      avgSalary: "$140k - $220k",
      growth: "+25% (2023-2033)",
      difficulty: "Advanced",
      gradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      id: "data-scientist",
      title: "Data Scientist",
      description: "Extract insights from complex datasets using statistical analysis, machine learning, and data visualization techniques.",
      icon: Database,
      matchPercentage: 82,
      skills: ["Python", "R", "SQL", "Statistics", "Data Visualization"],
      avgSalary: "$95k - $150k",
      growth: "+35% (2023-2033)",
      difficulty: "Intermediate",
      gradient: "from-green-500/10 to-emerald-500/10"
    },
    {
      id: "ai-product-manager",
      title: "AI Product Manager",
      description: "Lead product development for AI-powered solutions, working closely with engineering and design teams to deliver innovative products.",
      icon: Users,
      matchPercentage: 75,
      skills: ["Product Strategy", "AI/ML Understanding", "Leadership", "Analytics"],
      avgSalary: "$130k - $200k",
      growth: "+19% (2023-2033)",
      difficulty: "Intermediate",
      gradient: "from-orange-500/10 to-red-500/10"
    },
    {
      id: "ai-engineer",
      title: "AI Software Engineer",
      description: "Build and deploy AI applications, integrate machine learning models into production systems, and optimize AI workflows.",
      icon: Code,
      matchPercentage: 78,
      skills: ["Python", "JavaScript", "Cloud Platforms", "MLOps", "APIs"],
      avgSalary: "$110k - $170k",
      growth: "+22% (2023-2033)",
      difficulty: "Intermediate",
      gradient: "from-indigo-500/10 to-blue-500/10"
    },
    {
      id: "ai-consultant",
      title: "AI Consultant",
      description: "Help organizations implement AI strategies, assess AI opportunities, and guide digital transformation initiatives.",
      icon: TrendingUp,
      matchPercentage: 70,
      skills: ["Business Strategy", "AI Knowledge", "Communication", "Consulting"],
      avgSalary: "$100k - $180k",
      growth: "+15% (2023-2033)",
      difficulty: "Intermediate",
      gradient: "from-teal-500/10 to-green-500/10"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "text-green-600 bg-green-100";
      case "Intermediate": return "text-yellow-600 bg-yellow-100";
      case "Advanced": return "text-red-600 bg-red-100";
      default: return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your AI{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Career Path
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on your resume analysis, here are personalized AI career recommendations 
            tailored to your skills and experience.
          </p>
        </div>

        {/* User Profile Summary */}
        <GradientCard gradient="from-indigo-500/10 to-purple-500/10" className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Profile Match Summary</h3>
              <p className="text-gray-600">
                Based on your background in software development and technical skills
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-600">6</div>
              <div className="text-sm text-gray-600">Career Matches</div>
            </div>
          </div>
        </GradientCard>

        {/* Career Suggestions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {careerSuggestions.map((suggestion) => (
            <div
              key={suggestion.id}
              className={`cursor-pointer transition-all duration-200 ${
                selectedSuggestion === suggestion.id ? "scale-105" : "hover:scale-102"
              }`}
              onClick={() => setSelectedSuggestion(
                selectedSuggestion === suggestion.id ? null : suggestion.id
              )}
            >
              <GradientCard gradient={suggestion.gradient} className="h-full">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/80 rounded-lg shadow-sm">
                        <suggestion.icon className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{suggestion.title}</h3>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium text-gray-700">
                            {suggestion.matchPercentage}% match
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                      selectedSuggestion === suggestion.id ? "rotate-90" : ""
                    }`} />
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${suggestion.matchPercentage}%` }}
                    ></div>
                  </div>

                  {/* Basic Info */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Difficulty:</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(suggestion.difficulty)}`}>
                        {suggestion.difficulty}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Salary:</span>
                      <span className="text-sm font-medium text-gray-800">{suggestion.avgSalary}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Growth:</span>
                      <span className="text-sm font-medium text-green-600">{suggestion.growth}</span>
                    </div>
                  </div>

                  {/* Expanded Details */}
                  {selectedSuggestion === suggestion.id && (
                    <div className="space-y-4 pt-4 border-t border-white/20">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {suggestion.description}
                      </p>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 mb-2">Key Skills:</h4>
                        <div className="flex flex-wrap gap-1">
                          {suggestion.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="text-xs bg-white/60 text-gray-700 px-2 py-1 rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 text-sm">
                        Learn More
                      </button>
                    </div>
                  )}
                </div>
              </GradientCard>
            </div>
          ))}
        </div>

        {/* Next Steps */}
        <GradientCard gradient="from-green-500/10 to-blue-500/10" className="text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Ready to Start Your AI Journey?</h3>
          <p className="text-gray-600 mb-6">
            Get personalized guidance and create a roadmap for your chosen career path
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="/chat-mentor"
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200 flex items-center space-x-2"
            >
              <Zap className="w-4 h-4" />
              <span>Chat with AI Mentor</span>
            </a>
            <a
              href="/upload-resume"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors"
            >
              Update Resume
            </a>
          </div>
        </GradientCard>
      </div>
    </div>
  );
};

export default Suggestions;
