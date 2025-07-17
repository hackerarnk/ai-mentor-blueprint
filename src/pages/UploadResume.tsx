
// ✅ File: src/pages/UploadResume.tsx
import { useState, useRef } from "react";
import { Upload, FileText, CheckCircle, AlertCircle, Eye } from "lucide-react";
import GradientCard from "../components/GradientCard";
import Loader from "../components/Loader";

interface ResumeData {
  file: File;
  previewText: string;
  uploadStatus: "idle" | "uploading" | "success" | "error";
}

const UploadResume = () => {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file only.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      alert("File size should be less than 5MB.");
      return;
    }

    // Mock preview text extraction
    const mockPreviewText = `
Name: John Doe
Email: john.doe@email.com

EXPERIENCE:
• Software Developer at TechCorp (2021-2023)
  - Developed web applications using React and Node.js
  - Collaborated with cross-functional teams
  - Implemented responsive designs

• Junior Developer at StartupXYZ (2020-2021)
  - Built REST APIs using Python and Django
  - Worked on database optimization

SKILLS:
JavaScript, React, Node.js, Python, Django, HTML, CSS, SQL, Git

EDUCATION:
Bachelor of Computer Science
University of Technology (2016-2020)
    `.trim();

    setResumeData({
      file,
      previewText: mockPreviewText,
      uploadStatus: "idle"
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleUpload = async () => {
    if (!resumeData) return;

    setResumeData(prev => prev ? { ...prev, uploadStatus: "uploading" } : null);

    // Simulate upload process
    await new Promise(resolve => setTimeout(resolve, 2000));

    setResumeData(prev => prev ? { ...prev, uploadStatus: "success" } : null);
  };

  const resetUpload = () => {
    setResumeData(null);
    setShowPreview(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Upload Your{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your resume to get personalized AI career recommendations and insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <GradientCard title="Upload Resume" gradient="from-purple-500/10 to-blue-500/10">
            {!resumeData ? (
              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                  isDragging
                    ? "border-purple-400 bg-purple-50/50"
                    : "border-gray-300 hover:border-purple-300"
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Drop your resume here
                </h3>
                <p className="text-gray-600 mb-4">
                  or click to browse files (PDF only, max 5MB)
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handleFileInputChange}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                >
                  Choose File
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {/* File Info */}
                <div className="flex items-center space-x-3 p-4 bg-white/50 rounded-lg">
                  <FileText className="w-8 h-8 text-red-500" />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{resumeData.file.name}</h4>
                    <p className="text-sm text-gray-600">
                      {(resumeData.file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  {resumeData.uploadStatus === "success" && (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  )}
                </div>

                {/* Upload Status */}
                {resumeData.uploadStatus === "uploading" && (
                  <div className="text-center py-4">
                    <Loader text="Uploading and analyzing..." />
                  </div>
                )}

                {resumeData.uploadStatus === "success" && (
                  <div className="text-center py-4">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                    <p className="text-green-600 font-medium">Resume uploaded successfully!</p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  {resumeData.uploadStatus === "idle" && (
                    <button
                      onClick={handleUpload}
                      className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
                    >
                      Upload Resume
                    </button>
                  )}
                  <button
                    onClick={resetUpload}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}
          </GradientCard>

          {/* Preview Section */}
          <GradientCard title="Resume Preview" gradient="from-green-500/10 to-blue-500/10">
            {resumeData ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">Extracted Text Preview</span>
                  <button
                    onClick={() => setShowPreview(!showPreview)}
                    className="flex items-center space-x-1 text-purple-600 hover:text-purple-700 font-medium"
                  >
                    <Eye className="w-4 h-4" />
                    <span>{showPreview ? "Hide" : "Show"} Preview</span>
                  </button>
                </div>
                
                {showPreview && (
                  <div className="bg-white/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">
                      {resumeData.previewText}
                    </pre>
                  </div>
                )}

                {!showPreview && (
                  <div className="text-center py-8 text-gray-500">
                    <FileText className="w-12 h-12 mx-auto mb-2 opacity-50" />
                    <p>Click "Show Preview" to view extracted text</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <AlertCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Upload a resume to see the preview</p>
              </div>
            )}
          </GradientCard>
        </div>

        {/* Next Steps */}
        {resumeData?.uploadStatus === "success" && (
          <GradientCard gradient="from-indigo-500/10 to-purple-500/10" className="mt-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">What's Next?</h3>
            <p className="text-gray-600 mb-6">
              Your resume has been analyzed! Now you can explore personalized career suggestions.
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="/suggestions"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
              >
                View Career Suggestions
              </a>
              <a
                href="/chat-mentor"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:border-gray-400 transition-colors"
              >
                Chat with AI Mentor
              </a>
            </div>
          </GradientCard>
        )}
      </div>
    </div>
  );
};

export default UploadResume;
