import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Positions.css';

interface Position {
  id: string;
  title: string;
  department: string;
  level: string;
  salaryRange: {
    min: number;
    max: number;
  };
  requirements: string[];
  status: 'open' | 'filled' | 'closed';
}

export const Positions: React.FC = () => {
  const { user } = useAuth();
  const [positions, setPositions] = useState<Position[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data - replace with actual API call
    const mockPositions: Position[] = [
      {
        id: '1',
        title: 'Senior Pilot',
        department: 'Flight Operations',
        level: 'Senior',
        salaryRange: {
          min: 120000,
          max: 180000
        },
        requirements: [
          '10+ years of experience',
          'Type rating for Boeing 737',
          'First Class Medical Certificate'
        ],
        status: 'open'
      },
      {
        id: '2',
        title: 'Lead Engineer',
        department: 'Maintenance',
        level: 'Senior',
        salaryRange: {
          min: 90000,
          max: 130000
        },
        requirements: [
          'Bachelor\'s degree in Engineering',
          '5+ years of experience',
          'A&P Certification'
        ],
        status: 'filled'
      },
      {
        id: '3',
        title: 'Ground Operations Supervisor',
        department: 'Ground Handling',
        level: 'Mid',
        salaryRange: {
          min: 60000,
          max: 80000
        },
        requirements: [
          '3+ years of experience',
          'Leadership skills',
          'Knowledge of ground operations'
        ],
        status: 'open'
      }
    ];

    setPositions(mockPositions);
    setLoading(false);
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="positions">
      <div className="positions-header">
        <h1>Open Positions</h1>
      </div>

      <div className="positions-grid">
        {positions.map(position => (
          <div key={position.id} className="position-card">
            <div className="position-header">
              <h2>{position.title}</h2>
              <span className={`status ${position.status}`}>
                {position.status}
              </span>
            </div>
            <div className="position-info">
              <p><strong>Department:</strong> {position.department}</p>
              <p><strong>Level:</strong> {position.level}</p>
              <p><strong>Salary Range:</strong> ${position.salaryRange.min.toLocaleString()} - ${position.salaryRange.max.toLocaleString()}</p>
            </div>
            <div className="requirements">
              <h3>Requirements:</h3>
              <ul>
                {position.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 