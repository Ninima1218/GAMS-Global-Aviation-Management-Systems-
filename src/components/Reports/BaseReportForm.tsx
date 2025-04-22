import React, { useState } from 'react';
import { BaseReport, ReportType } from '../../types/reports';
import './BaseReportForm.css';

interface BaseReportFormProps {
  reportType: ReportType;
  onSubmit: (report: BaseReport) => void;
  children?: React.ReactNode;
}

export const BaseReportForm: React.FC<BaseReportFormProps> = ({
  reportType,
  onSubmit,
  children
}) => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [description, setDescription] = useState('');
  const [reportedBy, setReportedBy] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const baseReport: BaseReport = {
      id: Date.now().toString(), // В реальном приложении используйте UUID
      reportType,
      dateTime: new Date(),
      reportedBy,
      role,
      description,
      attachments,
      isAnonymous
    };
    onSubmit(baseReport);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  return (
    <form className="base-report-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>{reportType.replace(/_/g, ' ')}</h2>
      </div>

      {!isAnonymous && (
        <>
          <div className="form-group">
            <label htmlFor="reportedBy">Reported By</label>
            <input
              type="text"
              id="reportedBy"
              value={reportedBy}
              onChange={(e) => setReportedBy(e.target.value)}
              required={!isAnonymous}
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input
              type="text"
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required={!isAnonymous}
            />
          </div>
        </>
      )}

      {children}

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          rows={5}
        />
      </div>

      <div className="form-group">
        <label htmlFor="attachments">Attachments</label>
        <input
          type="file"
          id="attachments"
          multiple
          onChange={handleFileChange}
          className="file-input"
        />
      </div>

      <div className="form-group checkbox">
        <label>
          <input
            type="checkbox"
            checked={isAnonymous}
            onChange={(e) => setIsAnonymous(e.target.checked)}
          />
          Submit Anonymously
        </label>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">
          Submit Report
        </button>
      </div>
    </form>
  );
}; 