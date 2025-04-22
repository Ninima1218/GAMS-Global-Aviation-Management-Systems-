import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { ReportType, EventCategory, ReporterRole, FlightPhase, BaseReport } from '../../types/reports';
import './ReportForm.css';

interface ReportFormProps {
  onSubmit: (report: Partial<BaseReport>) => void;
  onCancel: () => void;
}

export const ReportForm: React.FC<ReportFormProps> = ({ onSubmit, onCancel }) => {
  const { user } = useAuth();
  const [reportType, setReportType] = useState<ReportType>(ReportType.QUICK_SAFETY);
  const [title, setTitle] = useState('');
  const [eventDateTime, setEventDateTime] = useState(new Date().toISOString().slice(0, 16));
  const [location, setLocation] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [registration, setRegistration] = useState('');
  const [flightPhase, setFlightPhase] = useState<FlightPhase>(FlightPhase.GROUND);
  const [description, setDescription] = useState('');
  const [eventCategory, setEventCategory] = useState<EventCategory>(EventCategory.OTHER);
  const [reporterRole, setReporterRole] = useState<ReporterRole>(ReporterRole.OTHER);
  const [immediateAction, setImmediateAction] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);

  const locations = [
    'Airport',
    'Airspace',
    'Ramp',
    'Hangar',
    'Terminal',
    'Runway',
    'Taxiway',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const report: Partial<BaseReport> = {
      title,
      type: reportType,
      description,
      eventDateTime: new Date(eventDateTime).toISOString(),
      location,
      flightNumber: flightNumber || undefined,
      registration: registration || undefined,
      flightPhase: flightNumber ? flightPhase : undefined,
      eventCategory,
      reporterRole,
      immediateAction: immediateAction || undefined,
      attachments: attachments.map(file => file.name),
      isAnonymous,
      createdBy: isAnonymous ? undefined : user?.id
    };
    onSubmit(report);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="reportType">Report Type</label>
        <select
          id="reportType"
          value={reportType}
          onChange={(e) => setReportType(e.target.value as ReportType)}
          required
        >
          {Object.values(ReportType).map(type => (
            <option key={type} value={type}>
              {type.replace(/_/g, ' ')}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="title">Title / Subject</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Bird strike during approach"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="eventDateTime">Date & Time of Event</label>
        <input
          type="datetime-local"
          id="eventDateTime"
          value={eventDateTime}
          onChange={(e) => setEventDateTime(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="location">Location</label>
        <select
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        >
          <option value="">Select Location</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="flightNumber">Flight Number (optional)</label>
        <input
          type="text"
          id="flightNumber"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          placeholder="e.g., ABC123"
        />
      </div>

      <div className="form-group">
        <label htmlFor="registration">Aircraft Registration (optional)</label>
        <input
          type="text"
          id="registration"
          value={registration}
          onChange={(e) => setRegistration(e.target.value)}
          placeholder="e.g., N12345"
        />
      </div>

      <div className="form-group">
        <label htmlFor="flightPhase">Phase of Flight (optional)</label>
        <select
          id="flightPhase"
          value={flightPhase}
          onChange={(e) => setFlightPhase(e.target.value as FlightPhase)}
          disabled={!flightNumber}
        >
          {Object.values(FlightPhase).map(phase => (
            <option key={phase} value={phase}>
              {phase.replace(/_/g, ' ')}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="description">Brief Description of the Safety Concern</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe what happened..."
          required
          rows={5}
        />
      </div>

      <div className="form-group">
        <label htmlFor="eventCategory">Type of Event / Category</label>
        <select
          id="eventCategory"
          value={eventCategory}
          onChange={(e) => setEventCategory(e.target.value as EventCategory)}
          required
        >
          {Object.values(EventCategory).map(category => (
            <option key={category} value={category}>
              {category.replace(/_/g, ' ')}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="reporterRole">Your Role</label>
        <select
          id="reporterRole"
          value={reporterRole}
          onChange={(e) => setReporterRole(e.target.value as ReporterRole)}
          required
        >
          {Object.values(ReporterRole).map(role => (
            <option key={role} value={role}>
              {role.replace(/_/g, ' ')}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="immediateAction">Immediate Action Taken (optional)</label>
        <textarea
          id="immediateAction"
          value={immediateAction}
          onChange={(e) => setImmediateAction(e.target.value)}
          placeholder="Describe any immediate actions taken..."
          rows={3}
        />
      </div>

      <div className="form-group">
        <label htmlFor="attachments">Upload Photo / File (optional)</label>
        <input
          type="file"
          id="attachments"
          onChange={handleFileChange}
          multiple
          accept="image/*,.pdf,.doc,.docx"
        />
        {attachments.length > 0 && (
          <div className="attachments-list">
            {attachments.map((file, index) => (
              <div key={index} className="attachment-item">
                {file.name}
              </div>
            ))}
          </div>
        )}
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
        <button type="button" onClick={onCancel} className="cancel-button">
          Cancel
        </button>
        <button type="submit" className="submit-button">
          Submit Report
        </button>
      </div>
    </form>
  );
}; 