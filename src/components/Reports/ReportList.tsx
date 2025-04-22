import React, { useState } from 'react';
import { useReports } from '../../contexts/ReportContext';
import { Report, ReportStatus, ReportType } from '../../types/reports';
import { useAuth } from '../../contexts/AuthContext';
import { ReportForm } from './ReportForm';
import './ReportList.css';

export const ReportList: React.FC = () => {
  const { 
    reports, 
    myReports, 
    assignedReports, 
    pendingReviewReports,
    openReports,
    archivedReports,
    acceptReport,
    rejectReport,
    assignReport,
    submitAction,
    reviewAction,
    archiveReport,
    sendFeedback,
    isLoading, 
    error 
  } = useReports();
  const { user } = useAuth();
  const [showReportForm, setShowReportForm] = useState(false);
  const [filter, setFilter] = useState<{
    type: ReportType | 'ALL';
    status: ReportStatus | 'ALL';
    view: 'ALL' | 'MY' | 'ASSIGNED' | 'PENDING' | 'OPEN' | 'ARCHIVED';
  }>({
    type: 'ALL',
    status: 'ALL',
    view: 'ALL'
  });

  const getStatusColor = (status: ReportStatus) => {
    switch (status) {
      case ReportStatus.PENDING_REVIEW:
        return 'status-new';
      case ReportStatus.ACCEPTED:
        return 'status-review';
      case ReportStatus.REJECTED:
        return 'status-action';
      case ReportStatus.ASSIGNED:
        return 'status-progress';
      case ReportStatus.AWAITING_ACTION:
        return 'status-action';
      case ReportStatus.AWAITING_SMS_REVIEW:
        return 'status-review';
      case ReportStatus.CLOSED:
        return 'status-resolved';
      case ReportStatus.ARCHIVED:
        return 'status-closed';
      default:
        return '';
    }
  };

  const getFilteredReports = () => {
    let filtered = reports;

    // Filter by view
    switch (filter.view) {
      case 'MY':
        filtered = myReports;
        break;
      case 'ASSIGNED':
        filtered = assignedReports;
        break;
      case 'PENDING':
        filtered = pendingReviewReports;
        break;
      case 'OPEN':
        filtered = openReports;
        break;
      case 'ARCHIVED':
        filtered = archivedReports;
        break;
      default:
        break;
    }

    // Filter by type
    if (filter.type !== 'ALL') {
      filtered = filtered.filter(report => report.type === filter.type);
    }

    // Filter by status
    if (filter.status !== 'ALL') {
      filtered = filtered.filter(report => report.status === filter.status);
    }

    return filtered;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleAcceptReport = async (reportId: string) => {
    try {
      await acceptReport(reportId);
    } catch (err) {
      console.error('Error accepting report:', err);
    }
  };

  const handleRejectReport = async (reportId: string) => {
    const comment = window.prompt('Please provide a reason for rejection:');
    if (comment) {
      try {
        await rejectReport(reportId, comment);
      } catch (err) {
        console.error('Error rejecting report:', err);
      }
    }
  };

  const handleAssignReport = async (reportId: string) => {
    const department = window.prompt('Please enter the department to assign to:');
    if (department) {
      try {
        await assignReport(reportId, department);
      } catch (err) {
        console.error('Error assigning report:', err);
      }
    }
  };

  const handleSubmitAction = async (reportId: string) => {
    const action = window.prompt('Please describe the action taken:');
    const comment = window.prompt('Additional comments (optional):');
    if (action) {
      try {
        await submitAction(reportId, action, comment);
      } catch (err) {
        console.error('Error submitting action:', err);
      }
    }
  };

  const handleReviewAction = async (reportId: string) => {
    const approved = window.confirm('Do you approve this action?');
    const comment = window.prompt('Additional comments (optional):');
    try {
      await reviewAction(reportId, approved, comment);
      if (approved) {
        await archiveReport(reportId);
        await sendFeedback(reportId);
      }
    } catch (err) {
      console.error('Error reviewing action:', err);
    }
  };

  if (isLoading) {
    return <div className="loading">Loading reports...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  const filteredReports = getFilteredReports();

  return (
    <div className="report-list">
      <div className="report-header">
        <div className="report-filters">
          <select
            value={filter.view}
            onChange={(e) => setFilter(prev => ({ ...prev, view: e.target.value as any }))}
          >
            <option value="ALL">All Reports</option>
            <option value="MY">My Reports</option>
            <option value="ASSIGNED">Assigned to Me</option>
            <option value="PENDING">Pending Review</option>
            <option value="OPEN">Open Reports</option>
            <option value="ARCHIVED">Archived Reports</option>
          </select>

          <select
            value={filter.type}
            onChange={(e) => setFilter(prev => ({ ...prev, type: e.target.value as ReportType | 'ALL' }))}
          >
            <option value="ALL">All Types</option>
            {Object.values(ReportType).map(type => (
              <option key={type} value={type}>{type.replace(/_/g, ' ')}</option>
            ))}
          </select>

          <select
            value={filter.status}
            onChange={(e) => setFilter(prev => ({ ...prev, status: e.target.value as ReportStatus | 'ALL' }))}
          >
            <option value="ALL">All Statuses</option>
            {Object.values(ReportStatus).map(status => (
              <option key={status} value={status}>{status.replace(/_/g, ' ')}</option>
            ))}
          </select>
        </div>
        <button 
          className="new-report-button"
          onClick={() => setShowReportForm(true)}
        >
          Create New Report
        </button>
      </div>

      {showReportForm && (
        <div className="report-form-modal">
          <ReportForm
            onSubmit={(report) => {
              // TODO: Implement report submission
              console.log('New report:', report);
              setShowReportForm(false);
            }}
            onCancel={() => setShowReportForm(false)}
          />
        </div>
      )}

      <div className="reports-grid">
        {filteredReports.map(report => (
          <div key={report.id} className="report-card">
            <div className="report-header">
              <h3>{report.title}</h3>
              <span className={`status-badge ${getStatusColor(report.status)}`}>
                {report.status.replace(/_/g, ' ')}
              </span>
            </div>
            
            <div className="report-info">
              <p><strong>Type:</strong> {report.type.replace(/_/g, ' ')}</p>
              <p><strong>Created:</strong> {formatDate(report.createdAt)}</p>
              <p><strong>Last Updated:</strong> {formatDate(report.updatedAt)}</p>
              {report.trackingNumber && (
                <p><strong>Tracking #:</strong> {report.trackingNumber}</p>
              )}
              {report.reportIdNumber && (
                <p><strong>Report ID:</strong> {report.reportIdNumber}</p>
              )}
              {report.assignedDepartment && (
                <p><strong>Department:</strong> {report.assignedDepartment}</p>
              )}
            </div>

            <div className="report-description">
              <p>{report.description}</p>
            </div>

            <div className="report-actions">
              <button onClick={() => window.location.href = `/reports/${report.id}`}>
                View Details
              </button>
              
              {report.status === ReportStatus.PENDING_REVIEW && user?.role === 'SAFETY_MANAGER' && (
                <>
                  <button onClick={() => handleAcceptReport(report.id)}>
                    Accept
                  </button>
                  <button onClick={() => handleRejectReport(report.id)}>
                    Reject
                  </button>
                </>
              )}

              {report.status === ReportStatus.ACCEPTED && user?.role === 'SAFETY_MANAGER' && (
                <button onClick={() => handleAssignReport(report.id)}>
                  Assign Department
                </button>
              )}

              {report.status === ReportStatus.ASSIGNED && report.assignedTo === user?.id && (
                <button onClick={() => handleSubmitAction(report.id)}>
                  Submit Action
                </button>
              )}

              {report.status === ReportStatus.AWAITING_SMS_REVIEW && user?.role === 'SAFETY_MANAGER' && (
                <button onClick={() => handleReviewAction(report.id)}>
                  Review Action
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredReports.length === 0 && (
        <div className="no-reports">
          No reports found matching the current filters.
        </div>
      )}
    </div>
  );
}; 