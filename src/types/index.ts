
// ✅ File: src/types/index.ts

export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export interface Resume {
  id: string;
  userId: string;
  fileName: string;
  fileSize: number;
  extractedText: string;
  uploadedAt: Date;
  analysisStatus: "pending" | "completed" | "failed";
}

export interface CareerSuggestion {
  id: string;
  title: string;
  description: string;
  matchPercentage: number;
  skills: string[];
  avgSalary: string;
  growth: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export interface ChatMessage {
  id: string;
  userId: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface AdminLog {
  id: string;
  userId: string;
  action: string;
  details: string;
  timestamp: Date;
  status: "success" | "error" | "pending";
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
