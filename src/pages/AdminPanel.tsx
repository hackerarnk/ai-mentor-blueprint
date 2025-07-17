
// ✅ File: src/pages/AdminPanel.tsx
import { useState } from "react";
import { Users, FileText, MessageSquare, Activity, Download, Filter, Search, Calendar } from "lucide-react";
import GradientCard from "../components/GradientCard";

interface LogEntry {
  id: string;
  user: string;
  action: string;
  timestamp: Date;
  details: string;
  status: "success" | "error" | "pending";
}

interface Stats {
  totalUsers: number;
  resumesUploaded: number;
  chatSessions: number;
  suggestionsGenerated: number;
}

const AdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  
  const stats: Stats = {
    totalUsers: 1247,
    resumesUploaded: 892,
    chatSessions: 2341,
    suggestionsGenerated: 1567
  };

  const mockLogs: LogEntry[] = [
    {
      id: "1",
      user: "john.doe@email.com",
      action: "Resume Upload",
      timestamp: new Date("2024-01-15T10:30:00"),
      details: "Uploaded resume.pdf (2.3MB) - Successfully processed",
      status: "success"
    },
    {
      id: "2",
      user: "jane.smith@email.com",
      action: "Chat Session",
      timestamp: new Date("2024-01-15T09:45:00"),
      details: "Started AI mentor chat - Asked about ML engineering career path",
      status: "success"
    },
    {
      id: "3",
      user: "alex.wilson@email.com",
      action: "Career Suggestions",
      timestamp: new Date("2024-01-15T09:15:00"),
      details: "Generated 6 AI career suggestions based on profile analysis",
      status: "success"
    },
    {
      id: "4",
      user: "sarah.brown@email.com",
      action: "Resume Upload",
      timestamp: new Date("2024-01-15T08:20:00"),
      details: "Upload failed - File size exceeds 5MB limit",
      status: "error"
    },
    {
      id: "5",
      user: "mike.johnson@email.com",
      action: "Profile Analysis",
      timestamp: new Date("2024-01-15T07:55:00"),
      details: "Profile analysis in progress - Processing resume data",
      status: "pending"
    },
    {
      id: "6",
      user: "lisa.garcia@email.com",
      action: "Chat Session",
      timestamp: new Date("2024-01-14T16:30:00"),
      details: "Completed 45-minute AI mentor session - Topic: Data Science transition",
      status: "success"
    }
  ];

  const filteredLogs = mockLogs.filter(log => {
    const matchesSearch = log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         log.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || log.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success": return "text-green-700 bg-green-100";
      case "error": return "text-red-700 bg-red-100";
      case "pending": return "text-yellow-700 bg-yellow-100";
      default: return "text-gray-700 bg-gray-100";
    }
  };

  const exportLogs = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "User,Action,Timestamp,Details,Status\n" +
      mockLogs.map(log => 
        `"${log.user}","${log.action}","${log.timestamp.toISOString()}","${log.details}","${log.status}"`
      ).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "admin_logs.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Admin{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Monitor system performance and user activities
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <GradientCard gradient="from-blue-500/10 to-cyan-500/10">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Users</p>
                <p className="text-2xl font-bold text-gray-800">{stats.totalUsers.toLocaleString()}</p>
              </div>
            </div>
          </GradientCard>

          <GradientCard gradient="from-green-500/10 to-emerald-500/10">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <FileText className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Resumes Uploaded</p>
                <p className="text-2xl font-bold text-gray-800">{stats.resumesUploaded.toLocaleString()}</p>
              </div>
            </div>
          </GradientCard>

          <GradientCard gradient="from-purple-500/10 to-pink-500/10">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-purple-100 rounded-lg">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Chat Sessions</p>
                <p className="text-2xl font-bold text-gray-800">{stats.chatSessions.toLocaleString()}</p>
              </div>
            </div>
          </GradientCard>

          <GradientCard gradient="from-orange-500/10 to-red-500/10">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Activity className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Suggestions Generated</p>
                <p className="text-2xl font-bold text-gray-800">{stats.suggestionsGenerated.toLocaleString()}</p>
              </div>
            </div>
          </GradientCard>
        </div>

        {/* Activity Logs */}
        <GradientCard title="System Activity Logs" gradient="from-gray-50/50 to-white/50">
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search logs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex space-x-3">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="success">Success</option>
                <option value="error">Error</option>
                <option value="pending">Pending</option>
              </select>
              
              <button
                onClick={exportLogs}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>

          {/* Logs Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">User</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Action</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Timestamp</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Details</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 px-4">
                      <div className="font-medium text-gray-800">{log.user}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-gray-700">{log.action}</div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">
                          {log.timestamp.toLocaleDateString()} {log.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="text-sm text-gray-600 max-w-xs truncate" title={log.details}>
                        {log.details}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(log.status)}`}>
                        {log.status.charAt(0).toUpperCase() + log.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredLogs.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Activity className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No logs found matching your criteria</p>
            </div>
          )}
        </GradientCard>
      </div>
    </div>
  );
};

export default AdminPanel;
