export enum ReportType {
  QUICK_SAFETY = 'QUICK_SAFETY',
  FLIGHT = 'FLIGHT',
  AIRCRAFT_TECHNICAL = 'AIRCRAFT_TECHNICAL',
  BIRD_STRIKE = 'BIRD_STRIKE',
  LASER_BEAM = 'LASER_BEAM',
  GROUND_OPERATION = 'GROUND_OPERATION',
  AERODROME = 'AERODROME',
  DANGEROUS_GOODS = 'DANGEROUS_GOODS',
  ATS = 'ATS',
  CARGO = 'CARGO',
  OCC = 'OCC'
}

export enum ReportStatus {
  PENDING_REVIEW = 'PENDING_REVIEW',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  ASSIGNED = 'ASSIGNED',
  AWAITING_ACTION = 'AWAITING_ACTION',
  AWAITING_SMS_REVIEW = 'AWAITING_SMS_REVIEW',
  CLOSED = 'CLOSED',
  ARCHIVED = 'ARCHIVED'
}

export enum FlightPhase {
  TAXI = 'TAXI',
  TAKEOFF = 'TAKEOFF',
  CLIMB = 'CLIMB',
  CRUISE = 'CRUISE',
  DESCENT = 'DESCENT',
  APPROACH = 'APPROACH',
  LANDING = 'LANDING',
  GROUND = 'GROUND',
  PARKED = 'PARKED',
  MAINTENANCE = 'MAINTENANCE',
  OTHER = 'OTHER'
}

export enum ReporterRole {
  PILOT = 'Pilot',
  CABIN_CREW = 'Cabin Crew',
  ENGINEER = 'Engineer',
  GROUND_HANDLER = 'Ground Handler',
  OTHER = 'Other'
}

export enum EventCategory {
  NEAR_MISS = 'Near Miss',
  FATIGUE = 'Fatigue',
  BIRD_STRIKE = 'Bird Strike',
  FOD = 'FOD',
  GROUND_INCIDENT = 'Ground Incident',
  TECHNICAL_ISSUE = 'Technical Issue',
  SECURITY_CONCERN = 'Security Concern',
  OTHER = 'Other'
}

export enum WeatherCondition {
  RAIN = 'Rain',
  SNOW = 'Snow',
  ICING = 'Icing',
  FOG = 'Fog',
  TURBULENCE = 'Turbulence',
  WIND_SHEAR = 'Wind Shear',
  CLEAR = 'Clear'
}

export interface ReportAction {
  id: string;
  reportId: string;
  userId: string;
  action: string;
  comment?: string;
  createdAt: string;
}

export interface ReportComment {
  id: string;
  reportId: string;
  userId: string;
  comment: string;
  createdAt: string;
}

export interface BaseReport {
  id: string;
  type: ReportType;
  title: string;
  description: string;
  status: ReportStatus;
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  assignedTo?: string;
  assignedDepartment?: string;
  isAnonymous: boolean;
  attachments: string[];
  actions: ReportAction[];
  comments: ReportComment[];
  trackingNumber?: string;
  reportIdNumber?: string;
  classification?: string;
  areaOfOccurrence?: string;
  feedbackSent?: boolean;
  feedbackSentAt?: string;
}

export interface QuickSafetyReport extends BaseReport {
  type: ReportType.QUICK_SAFETY;
  eventDateTime: string;
  location: string;
  flightNumber?: string;
  registration?: string;
  flightPhase?: FlightPhase;
  eventCategory: string;
  reporterRole: string;
  immediateAction?: string;
}

export interface FlightReport extends BaseReport {
  type: ReportType.FLIGHT;
  flightNumber: string;
  flightDate: string;
  aircraftType: string;
  registration: string;
  departureAirport: string;
  arrivalAirport: string;
  scheduledDepartureTime?: string;
  scheduledArrivalTime?: string;
  actualDepartureTime?: string;
  actualArrivalTime?: string;
  captainName: string;
  occurrenceDateTime: string;
  occurrenceFlightPhase: FlightPhase;
  weatherConditions?: string;
  occurrenceLocation: string;
  occurrenceTypes: string[];
  shortSummary: string;
  detailedDescription: string;
  crewActions: string;
  outcome: string;
  atcNotified: boolean;
  injuriesOrDamage: boolean;
  injuriesOrDamageDescription?: string;
  technicalLogEntry: boolean;
  technicalLogReference?: string;
  furtherSafetyReport: boolean;
  recommendations?: string;
}

// Добавьте остальные типы отчетов по аналогии

export type Report = 
  | QuickSafetyReport 
  | FlightReport 
  // | AircraftTechnicalReport 
  // | BirdStrikeReport 
  // | LaserBeamReport 
  // | GroundOperationReport 
  // | AerodromeReport 
  // | DangerousGoodsReport 
  // | ATSReport 
  // | CargoReport 
  // | OCCReport; 