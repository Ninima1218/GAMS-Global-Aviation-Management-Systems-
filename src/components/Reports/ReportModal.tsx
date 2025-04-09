import React, { useState } from 'react';
import './ReportModal.css';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReportModal: React.FC<ReportModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    search: '',
    kindOfReport: '',
    areaOfOccurrence: '',
    typeOfOccurrence: '',
    eventClassification: '',
    description: '',
  });

  const reportKinds = [
    'Quick Safety Report',
    'Air Safety Report - ASR',
    'Flight Report - FR',
    'Aircraft Technical Occurrence Report',
    'Bird Strike Report',
    'Laser Beam/ Firework Occurrence Report',
    'Ground Operation Occurrence Report',
    'Aerodrome Occurrence Report',
    'Dangerous Goods Occurrence Report',
    'ATS Occurrence Report',
    'Cargo Safety Report',
    'OCC Safety Report',
  ];

  const areasOfOccurrence = [
    'Flight Operation',
    'Airside / Airport',
    'Cabin & Cockpit Areas',
    'Technical / Maintenance',
    'ATM / ATC / Systems',
    'Ground Operations',
    'Other / General',
  ];

  const typesOfOccurrence = [
    'Accident',
    'Serious incident',
    'Incident',
    'Occurrence without safety effect',
    'Not determined',
  ];

  const eventClassifications = [
    'ADRM: Aerodrome',
    'AMAN: Abrupt maneuvre',
    'ARC: Abnormal runway contact',
    'ATM: ATM/CNS',
    'BIRD: Birdstrike',
    'CABIN: Cabin safety events',
    'CFIT: Controlled flight into or toward terrain',
    'CTOL: Collision with obstacle(s) during take-off and landing',
    'EVAC: Evacuation',
    'EXTL: External load related occurrences',
    'F-NI: Fire/smoke (non-impact)',
    'F-POST: Fire/smoke (post-impact)',
    'FUEL: Fuel related',
    'GCOL: Ground Collision',
    'GTOW: Glider towing related events',
    'ICE: Icing',
    'LALT: Low altitude operations',
    'LOC-G: Loss of control – ground',
    'LOC-I: Loss of control – inflight',
    'LOLI: Loss of lifting conditions en-route',
    'MAC: Airprox/ ACAS alert/ loss of separation/ (near) midair collisions',
    'RAMP: Ground Handling',
    'RE: Runway excursion',
    'RI: Runway incursion - vehicle, aircraft or person',
    'RI-O: Runway incursion – other',
    'RI-VA: Rwy incursion-vehicle or a/c',
    'SCF-NP: System/component failure or malfunction [non-powerplant]',
    'SCF-PP: powerplant failure or malfunction',
    'SEC: Security related',
    'TURB: Turbulence encounter',
    'UIMC: Unintended flight in IMC',
    'USOS: Undershoot/overshoot',
    'WILD: Collision Wildlife',
    'WSTRW: Windshear or thunderstorm',
    'OTHR: Other',
    'UNK: Unknown or undetermined',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement report submission
    console.log('Report data:', formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Create New Report</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="search">Search</label>
            <input
              type="text"
              id="search"
              name="search"
              value={formData.search}
              onChange={handleChange}
              placeholder="Search reports..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="kindOfReport">Kind of Report</label>
            <select
              id="kindOfReport"
              name="kindOfReport"
              value={formData.kindOfReport}
              onChange={handleChange}
              required
            >
              <option value="">Select report kind</option>
              {reportKinds.map(kind => (
                <option key={kind} value={kind}>{kind}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="areaOfOccurrence">Area of Occurrence</label>
            <select
              id="areaOfOccurrence"
              name="areaOfOccurrence"
              value={formData.areaOfOccurrence}
              onChange={handleChange}
              required
            >
              <option value="">Select area</option>
              {areasOfOccurrence.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="typeOfOccurrence">Type of Occurrence</label>
            <select
              id="typeOfOccurrence"
              name="typeOfOccurrence"
              value={formData.typeOfOccurrence}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>
              {typesOfOccurrence.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="eventClassification">Event Classification</label>
            <select
              id="eventClassification"
              name="eventClassification"
              value={formData.eventClassification}
              onChange={handleChange}
              required
            >
              <option value="">Select classification</option>
              {eventClassifications.map(classification => (
                <option key={classification} value={classification}>{classification}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Describe the occurrence in detail..."
            />
          </div>

          <div className="modal-footer">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="submit-button">
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}; 