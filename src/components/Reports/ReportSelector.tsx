import React from 'react';
import { ReportType } from '../../types/reports';
import './ReportSelector.css';

interface ReportTypeOption {
  type: ReportType;
  label: string;
  description: string;
  icon: string;
}

const reportTypes: ReportTypeOption[] = [
  {
    type: ReportType.QUICK_SAFETY,
    label: 'Quick Safety Report',
    description: 'Fast reporting of safety concerns',
    icon: '🚨'
  },
  {
    type: ReportType.ASR,
    label: 'Air Safety Report',
    description: 'Detailed flight safety incident reporting',
    icon: '✈️'
  },
  {
    type: ReportType.FLIGHT,
    label: 'Flight Report',
    description: 'General flight occurrence reporting',
    icon: '📋'
  },
  {
    type: ReportType.TECHNICAL,
    label: 'Technical Report',
    description: 'Aircraft technical issues and maintenance',
    icon: '🔧'
  },
  {
    type: ReportType.BIRD_STRIKE,
    label: 'Bird Strike Report',
    description: 'Bird strike incidents and damage assessment',
    icon: '🦅'
  },
  {
    type: ReportType.LASER_FIREWORK,
    label: 'Laser/Firework Report',
    description: 'Laser and firework interference incidents',
    icon: '🔦'
  },
  {
    type: ReportType.GROUND_OPERATION,
    label: 'Ground Operation Report',
    description: 'Ground handling and operations incidents',
    icon: '🚛'
  },
  {
    type: ReportType.AERODROME,
    label: 'Aerodrome Report',
    description: 'Airport facility and infrastructure issues',
    icon: '🏢'
  },
  {
    type: ReportType.DANGEROUS_GOODS,
    label: 'Dangerous Goods Report',
    description: 'Hazardous materials incidents',
    icon: '⚠️'
  },
  {
    type: ReportType.ATS,
    label: 'ATS Report',
    description: 'Air Traffic Services related incidents',
    icon: '🗼'
  },
  {
    type: ReportType.CARGO,
    label: 'Cargo Safety Report',
    description: 'Cargo handling and safety issues',
    icon: '📦'
  },
  {
    type: ReportType.OCC,
    label: 'OCC Report',
    description: 'Operations Control Center incidents',
    icon: '🎮'
  }
];

interface ReportSelectorProps {
  onSelect: (type: ReportType) => void;
}

export const ReportSelector: React.FC<ReportSelectorProps> = ({ onSelect }) => {
  return (
    <div className="report-selector">
      <h2>Select Report Type</h2>
      <div className="report-grid">
        {reportTypes.map((report) => (
          <div
            key={report.type}
            className="report-card"
            onClick={() => onSelect(report.type)}
          >
            <div className="report-icon">{report.icon}</div>
            <h3>{report.label}</h3>
            <p>{report.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 