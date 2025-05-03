import React, { createContext, useContext, useState, useEffect } from 'react';
import { Report, ReportStatus, ReportType } from '../types/reports';
import { useAuth } from './AuthContext';

interface ReportContextType {
  reports: Report[];
  myReports: Report[];
  assignedReports: Report[];
  pendingReviewReports: Report[];
  openReports: Report[];
  archivedReports: Report[];
  createReport: (report: Omit<Report, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'actions' | 'comments' | 'trackingNumber'>) => Promise<void>;
  updateReport: (reportId: string, updates: Partial<Report>) => Promise<void>;
  addComment: (reportId: string, comment: string) => Promise<void>;
  addAction: (reportId: string, action: string, comment?: string) => Promise<void>;
  getReportById: (reportId: string) => Report | undefined;
  acceptReport: (reportId: string) => Promise<void>;
  rejectReport: (reportId: string, comment: string) => Promise<void>;
  assignReport: (reportId: string, department: string) => Promise<void>;
  submitAction: (reportId: string, action: string, comment?: string) => Promise<void>;
  reviewAction: (reportId: string, approved: boolean, comment?: string) => Promise<void>;
  archiveReport: (reportId: string) => Promise<void>;
  sendFeedback: (reportId: string) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const ReportContext = createContext<ReportContextType | undefined>(undefined);

export const ReportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reports, setReports] = useState<Report[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('http://localhost:3001/reports');
      const data = await response.json();
      setReports(data);
    } catch (err) {
      setError('Failed to load reports');
      console.error('Error loading reports:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const myReports = reports.filter(report => report.createdBy === user?.id);
  const assignedReports = reports.filter(report => report.assignedTo === user?.id);
  const pendingReviewReports = reports.filter(report => report.status === ReportStatus.PENDING_REVIEW);
  const openReports = reports.filter(report => 
    [ReportStatus.ACCEPTED, ReportStatus.ASSIGNED, ReportStatus.AWAITING_ACTION, ReportStatus.AWAITING_SMS_REVIEW].includes(report.status)
  );
  const archivedReports = reports.filter(report => report.status === ReportStatus.ARCHIVED);

  const generateTrackingNumber = () => {
    return `TR-${Date.now().toString(36).toUpperCase()}`;
  };

  const generateReportIdNumber = () => {
    return `RPT-${Date.now().toString(36).toUpperCase()}`;
  };

  const createReport = async (reportData: Omit<Report, 'id' | 'createdAt' | 'updatedAt' | 'status' | 'actions' | 'comments' | 'trackingNumber'>) => {
    setIsLoading(true);
    setError(null);
    try {
      const newReport: Report = {
        ...reportData,
        id: Math.random().toString(36).substr(2, 9),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: ReportStatus.PENDING_REVIEW,
        actions: [],
        comments: [],
        createdBy: user?.id || '',
        trackingNumber: generateTrackingNumber(),
      };
      const response = await fetch('http://localhost:3001/reports', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newReport),
      });
      if (!response.ok) throw new Error('Failed to create report');
      await loadReports();
    } catch (err) {
      setError('Failed to create report');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const acceptReport = async (reportId: string) => {
    try {
      const report = reports.find(r => r.id === reportId);
      if (!report) throw new Error('Report not found');

      const updates = {
        status: ReportStatus.ACCEPTED,
        reportIdNumber: generateReportIdNumber(),
        updatedAt: new Date().toISOString(),
      };

      await updateReport(reportId, updates);
    } catch (err) {
      setError('Failed to accept report');
      console.error('Error accepting report:', err);
      throw err;
    }
  };

  const rejectReport = async (reportId: string, comment: string) => {
    try {
      const updates = {
        status: ReportStatus.REJECTED,
        updatedAt: new Date().toISOString(),
      };

      await updateReport(reportId, updates);
      await addComment(reportId, comment);
    } catch (err) {
      setError('Failed to reject report');
      console.error('Error rejecting report:', err);
      throw err;
    }
  };

  const assignReport = async (reportId: string, department: string) => {
    try {
      const updates = {
        status: ReportStatus.ASSIGNED,
        assignedDepartment: department,
        updatedAt: new Date().toISOString(),
      };

      await updateReport(reportId, updates);
    } catch (err) {
      setError('Failed to assign report');
      console.error('Error assigning report:', err);
      throw err;
    }
  };

  const submitAction = async (reportId: string, action: string, comment?: string) => {
    try {
      const updates = {
        status: ReportStatus.AWAITING_SMS_REVIEW,
        updatedAt: new Date().toISOString(),
      };

      await updateReport(reportId, updates);
      await addAction(reportId, action, comment);
    } catch (err) {
      setError('Failed to submit action');
      console.error('Error submitting action:', err);
      throw err;
    }
  };

  const reviewAction = async (reportId: string, approved: boolean, comment?: string) => {
    try {
      const updates = {
        status: approved ? ReportStatus.CLOSED : ReportStatus.AWAITING_ACTION,
        updatedAt: new Date().toISOString(),
      };

      await updateReport(reportId, updates);
      if (comment) {
        await addComment(reportId, comment);
      }
    } catch (err) {
      setError('Failed to review action');
      console.error('Error reviewing action:', err);
      throw err;
    }
  };

  const archiveReport = async (reportId: string) => {
    try {
      const updates = {
        status: ReportStatus.ARCHIVED,
        updatedAt: new Date().toISOString(),
      };

      await updateReport(reportId, updates);
    } catch (err) {
      setError('Failed to archive report');
      console.error('Error archiving report:', err);
      throw err;
    }
  };

  const sendFeedback = async (reportId: string) => {
    try {
      const updates = {
        feedbackSent: true,
        feedbackSentAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      await updateReport(reportId, updates);
      // TODO: Send feedback email to reporter
      // This would be implemented with your email system
    } catch (err) {
      setError('Failed to send feedback');
      console.error('Error sending feedback:', err);
      throw err;
    }
  };

  const updateReport = async (reportId: string, updates: Partial<Report>) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`http://localhost:3001/reports/${reportId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...updates, updatedAt: new Date().toISOString() }),
      });
      if (!response.ok) throw new Error('Failed to update report');
      await loadReports();
    } catch (err) {
      setError('Failed to update report');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addComment = async (reportId: string, comment: string) => {
    try {
      const newComment = {
        id: Math.random().toString(36).substr(2, 9),
        reportId,
        userId: user?.id || '',
        comment,
        createdAt: new Date().toISOString(),
      };

      const response = await fetch(`http://localhost:3001/reports/${reportId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) {
        throw new Error('Failed to add comment');
      }

      const updatedReport = await response.json();
      setReports(prev => prev.map(report => 
        report.id === reportId ? updatedReport : report
      ));
    } catch (err) {
      setError('Failed to add comment');
      console.error('Error adding comment:', err);
      throw err;
    }
  };

  const addAction = async (reportId: string, action: string, comment?: string) => {
    try {
      const newAction = {
        id: Math.random().toString(36).substr(2, 9),
        reportId,
        userId: user?.id || '',
        action,
        comment,
        createdAt: new Date().toISOString(),
      };

      const response = await fetch(`http://localhost:3001/reports/${reportId}/actions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAction),
      });

      if (!response.ok) {
        throw new Error('Failed to add action');
      }

      const updatedReport = await response.json();
      setReports(prev => prev.map(report => 
        report.id === reportId ? updatedReport : report
      ));
    } catch (err) {
      setError('Failed to add action');
      console.error('Error adding action:', err);
      throw err;
    }
  };

  const getReportById = (reportId: string) => {
    return reports.find(report => report.id === reportId);
  };

  return (
    <ReportContext.Provider value={{
      reports,
      myReports,
      assignedReports,
      pendingReviewReports,
      openReports,
      archivedReports,
      createReport,
      updateReport,
      addComment,
      addAction,
      getReportById,
      acceptReport,
      rejectReport,
      assignReport,
      submitAction,
      reviewAction,
      archiveReport,
      sendFeedback,
      isLoading,
      error,
    }}>
      {children}
    </ReportContext.Provider>
  );
};

export const useReports = () => {
  const context = useContext(ReportContext);
  if (context === undefined) {
    throw new Error('useReports must be used within a ReportProvider');
  }
  return context;
}; 