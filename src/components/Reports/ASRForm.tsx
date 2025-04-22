import React, { useState } from 'react';
import { BaseReportForm } from './BaseReportForm';
import { ReportType, ASRReport, FlightPhase, WeatherCondition } from '../../types/reports';
import './ASRForm.css';

interface ASRFormProps {
  onSubmit: (report: ASRReport) => void;
}

export const ASRForm: React.FC<ASRFormProps> = ({ onSubmit }) => {
  const [flightNumber, setFlightNumber] = useState('');
  const [registration, setRegistration] = useState('');
  const [route, setRoute] = useState({ from: '', to: '', diverted: '' });
  const [eventType, setEventType] = useState({
    asr: false,
    airMiss: false,
    birdStrike: false,
    wakeTurbulence: false,
    tcasRa: false,
    technical: false,
    other: ''
  });
  const [crew, setCrew] = useState({
    captain: '',
    coPilot: '',
    otherCrew: []
  });
  const [flightDetails, setFlightDetails] = useState({
    phase: FlightPhase.CRUISE,
    altitude: 0,
    speed: 0,
    weight: 0,
    configuration: {
      gear: false,
      flaps: 0,
      spoilers: false
    }
  });
  const [weather, setWeather] = useState({
    conditions: [] as WeatherCondition[],
    visibility: 0,
    cloudBase: 0,
    temperature: 0,
    wind: {
      direction: 0,
      speed: 0
    }
  });
  const [runway, setRunway] = useState({
    number: '',
    condition: '',
    rvr: 0
  });
  const [narrative, setNarrative] = useState({
    summary: '',
    eventCause: '',
    actionsResults: '',
    recommendations: ''
  });

  const handleBaseSubmit = (baseReport: any) => {
    const asrReport: ASRReport = {
      ...baseReport,
      flightNumber,
      registration,
      route,
      eventType,
      crew,
      flightDetails,
      weather,
      runway,
      narrative
    };
    onSubmit(asrReport);
  };

  return (
    <BaseReportForm reportType={ReportType.ASR} onSubmit={handleBaseSubmit}>
      <div className="asr-form-content">
        <section className="form-section">
          <h3>Flight Information</h3>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="flightNumber">Flight Number</label>
              <input
                type="text"
                id="flightNumber"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="registration">Registration</label>
              <input
                type="text"
                id="registration"
                value={registration}
                onChange={(e) => setRegistration(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="routeFrom">From</label>
              <input
                type="text"
                id="routeFrom"
                value={route.from}
                onChange={(e) => setRoute({ ...route, from: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="routeTo">To</label>
              <input
                type="text"
                id="routeTo"
                value={route.to}
                onChange={(e) => setRoute({ ...route, to: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="routeDiverted">Diverted To</label>
              <input
                type="text"
                id="routeDiverted"
                value={route.diverted}
                onChange={(e) => setRoute({ ...route, diverted: e.target.value })}
              />
            </div>
          </div>
        </section>

        <section className="form-section">
          <h3>Event Type</h3>
          <div className="checkbox-grid">
            <label>
              <input
                type="checkbox"
                checked={eventType.asr}
                onChange={(e) => setEventType({ ...eventType, asr: e.target.checked })}
              />
              ASR
            </label>
            <label>
              <input
                type="checkbox"
                checked={eventType.airMiss}
                onChange={(e) => setEventType({ ...eventType, airMiss: e.target.checked })}
              />
              Air Miss
            </label>
            <label>
              <input
                type="checkbox"
                checked={eventType.birdStrike}
                onChange={(e) => setEventType({ ...eventType, birdStrike: e.target.checked })}
              />
              Bird Strike
            </label>
            <label>
              <input
                type="checkbox"
                checked={eventType.wakeTurbulence}
                onChange={(e) => setEventType({ ...eventType, wakeTurbulence: e.target.checked })}
              />
              Wake Turbulence
            </label>
            <label>
              <input
                type="checkbox"
                checked={eventType.tcasRa}
                onChange={(e) => setEventType({ ...eventType, tcasRa: e.target.checked })}
              />
              TCAS RA
            </label>
            <label>
              <input
                type="checkbox"
                checked={eventType.technical}
                onChange={(e) => setEventType({ ...eventType, technical: e.target.checked })}
              />
              Technical
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="eventTypeOther">Other</label>
            <input
              type="text"
              id="eventTypeOther"
              value={eventType.other}
              onChange={(e) => setEventType({ ...eventType, other: e.target.value })}
            />
          </div>
        </section>

        <section className="form-section">
          <h3>Narrative</h3>
          <div className="form-group">
            <label htmlFor="summary">Summary</label>
            <textarea
              id="summary"
              value={narrative.summary}
              onChange={(e) => setNarrative({ ...narrative, summary: e.target.value })}
              required
              rows={3}
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventCause">Event and Cause</label>
            <textarea
              id="eventCause"
              value={narrative.eventCause}
              onChange={(e) => setNarrative({ ...narrative, eventCause: e.target.value })}
              required
              rows={4}
            />
          </div>
          <div className="form-group">
            <label htmlFor="actionsResults">Actions and Results</label>
            <textarea
              id="actionsResults"
              value={narrative.actionsResults}
              onChange={(e) => setNarrative({ ...narrative, actionsResults: e.target.value })}
              required
              rows={4}
            />
          </div>
          <div className="form-group">
            <label htmlFor="recommendations">Recommendations</label>
            <textarea
              id="recommendations"
              value={narrative.recommendations}
              onChange={(e) => setNarrative({ ...narrative, recommendations: e.target.value })}
              rows={3}
            />
          </div>
        </section>
      </div>
    </BaseReportForm>
  );
}; 