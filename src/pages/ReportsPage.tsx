import React, { useState } from 'react';
import { ReportSelector } from '../components/Reports/ReportSelector';
import { ASRForm } from '../components/Reports/ASRForm';
import { ReportForm } from '../components/Reports/ReportForm';
import { ReportType } from '../types/reports';
import './ReportsPage.css';

export const ReportsPage: React.FC = () => {
  const [selectedReportType, setSelectedReportType] = useState<ReportType | null>(null);

  const handleReportSelect = (type: ReportType) => {
    setSelectedReportType(type);
  };

  const handleSubmit = (report: any) => {
    // TODO: Implement report submission to backend
    console.log('Submitting report:', report);
    // Reset form after submission
    setSelectedReportType(null);
  };

  const renderReportForm = () => {
    switch (selectedReportType) {
      case ReportType.ASR:
        return <ASRForm onSubmit={handleSubmit} />;
      case ReportType.QUICK_SAFETY:
        return <ReportForm onSubmit={handleSubmit} />;
      // Add other report forms here
      default:
        return <ReportSelector onSelect={handleReportSelect} />;
    }
  };

  return (
    <div className="reports-page">
      {selectedReportType ? (
        <div className="report-form-container">
          <button
            className="back-button"
            onClick={() => setSelectedReportType(null)}
          >
            ← Back to Report Types
          </button>
          {renderReportForm()}
        </div>
      ) : (
        <ReportSelector onSelect={handleReportSelect} />
      )}
    </div>
  );
}; 