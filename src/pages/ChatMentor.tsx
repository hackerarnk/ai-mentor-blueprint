
// ✅ File: src/pages/ChatMentor.tsx
import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, MessageCircle, BookOpen, Target } from "lucide-react";
import GradientCard from "../components/GradientCard";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatMentor = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your AI Career Mentor. I'm here to help you navigate your AI career journey. What would you like to know about AI careers, skill development, or industry trends?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickQuestions = [
    "What skills do I need for ML engineering?",
    "How to transition into AI from web development?",
    "What's the difference between AI roles?",
    "Best resources for learning AI?",
    "How to build an AI portfolio?",
    "Current AI job market trends?"
  ];

  const mockResponses = [
    "Great question! For ML engineering, you'll need strong Python skills, understanding of machine learning algorithms, experience with frameworks like TensorFlow or PyTorch, and knowledge of data preprocessing. Mathematical foundations in statistics and linear algebra are also crucial.",
    
    "Transitioning from web development to AI is definitely possible! Your programming background gives you a solid foundation. I'd recommend starting with Python data science libraries, taking online ML courses, working on projects that combine your web skills with AI (like building ML-powered web apps), and gradually building up your portfolio.",
    
    "AI roles vary quite a bit! ML Engineers focus on building and deploying models, Data Scientists analyze data for insights, AI Researchers work on cutting-edge algorithms, AI Product Managers guide product strategy, and AI Engineers integrate AI into applications. Each has different skill requirements and career paths.",
    
    "Some excellent resources include: Coursera's ML course by Andrew Ng, Fast.ai for practical deep learning, Kaggle for competitions and datasets, Papers with Code for latest research, and GitHub for open-source projects. I also recommend building projects and contributing to the AI community.",
    
    "Building an AI portfolio should showcase both technical skills and business impact. Include diverse projects like a web scraping + ML project, a deep learning image classifier, an NLP sentiment analyzer, and a deployment project. Document your process, challenges, and results clearly.",
    
    "The AI job market is very strong! There's high demand for ML engineers, data scientists, and AI specialists. Companies are investing heavily in AI transformation. Salaries are competitive, especially for specialized roles. Remote work opportunities are abundant, and the field offers excellent career growth potential."
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 1500));

    const responseText = mockResponses[Math.floor(Math.random() * mockResponses.length)];
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: responseText,
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsTyping(false);
  };

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
    inputRef.current?.focus();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            AI Career{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Mentor
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Get personalized guidance for your AI career journey
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Quick Actions Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <GradientCard title="Quick Questions" gradient="from-purple-500/10 to-pink-500/10">
              <div className="space-y-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="w-full text-left p-3 text-sm bg-white/50 hover:bg-white/70 rounded-lg transition-colors border border-white/20 hover:border-purple-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </GradientCard>

            <GradientCard title="Mentor Features" gradient="from-blue-500/10 to-cyan-500/10">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>Career Guidance</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <Target className="w-4 h-4 text-green-500" />
                  <span>Skill Roadmaps</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span>Industry Insights</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-700">
                  <MessageCircle className="w-4 h-4 text-orange-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </GradientCard>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3">
            <GradientCard gradient="from-gray-50/50 to-white/50" className="h-[600px] flex flex-col">
              {/* Chat Header */}
              <div className="flex items-center space-x-3 p-4 border-b border-white/20">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">AI Career Mentor</h3>
                  <p className="text-sm text-green-600">● Online</p>
                </div>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl ${
                        message.isUser
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                          : "bg-white/80 text-gray-800 border border-white/30"
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {!message.isUser && (
                          <Bot className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                        )}
                        {message.isUser && (
                          <User className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                        )}
                        <div className="flex-1">
                          <p className="leading-relaxed">{message.text}</p>
                          <p className={`text-xs mt-2 ${
                            message.isUser ? "text-purple-100" : "text-gray-500"
                          }`}>
                            {message.timestamp.toLocaleTimeString([], { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white/80 border border-white/30 p-4 rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <Bot className="w-5 h-5 text-purple-500" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-white/20">
                <div className="flex space-x-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask me anything about AI careers..."
                    className="flex-1 px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputText.trim() || isTyping}
                    className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </GradientCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMentor;
