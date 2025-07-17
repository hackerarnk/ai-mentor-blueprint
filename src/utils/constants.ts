
// ✅ File: src/utils/constants.ts

export const APP_CONFIG = {
  name: "AI Career Mentor",
  description: "An Intelligent Mentor for AI Career Path Discovery and Upskilling",
  version: "1.0.0",
  author: "Your Name"
};

export const FILE_CONSTRAINTS = {
  maxFileSize: 5 * 1024 * 1024, // 5MB
  allowedTypes: ["application/pdf"],
  allowedExtensions: [".pdf"]
};

export const ROUTES = {
  HOME: "/",
  UPLOAD_RESUME: "/upload-resume",
  SUGGESTIONS: "/suggestions",
  CHAT_MENTOR: "/chat-mentor",
  ADMIN_PANEL: "/admin"
};

export const AI_CAREER_PATHS = [
  "Machine Learning Engineer",
  "AI Research Scientist",
  "Data Scientist",
  "AI Product Manager",
  "AI Software Engineer",
  "AI Consultant",
  "Computer Vision Engineer",
  "Natural Language Processing Engineer",
  "AI Ethics Specialist",
  "Robotics Engineer"
];

export const SKILL_CATEGORIES = {
  PROGRAMMING: ["Python", "R", "JavaScript", "Java", "C++", "SQL"],
  ML_FRAMEWORKS: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost"],
  DATA_TOOLS: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau"],
  CLOUD_PLATFORMS: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"],
  MATHEMATICS: ["Statistics", "Linear Algebra", "Calculus", "Probability"],
  SOFT_SKILLS: ["Communication", "Leadership", "Problem Solving", "Critical Thinking"]
};
