export enum EmployeeStatus {
  ACTIVE = 'ACTIVE',
  ON_LEAVE = 'ON_LEAVE',
  TERMINATED = 'TERMINATED'
}

export enum DocumentType {
  PASSPORT = 'PASSPORT',
  CONTRACT = 'CONTRACT',
  NDA = 'NDA',
  CERTIFICATION = 'CERTIFICATION',
  LICENSE = 'LICENSE',
  OTHER = 'OTHER'
}

export enum LicenseStatus {
  VALID = 'VALID',
  EXPIRED = 'EXPIRED',
  PENDING_RENEWAL = 'PENDING_RENEWAL'
}

export enum LeaveType {
  VACATION = 'VACATION',
  BUSINESS_TRIP = 'BUSINESS_TRIP'
}

export enum ReminderType {
  CONTRACT_EXPIRY = 'CONTRACT_EXPIRY',
  LICENSE_EXPIRY = 'LICENSE_EXPIRY',
  TRAINING_DEADLINE = 'TRAINING_DEADLINE'
}

export enum ReminderStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED'
}

export enum DocumentStatus {
  VALID = 'VALID',
  EXPIRED = 'EXPIRED',
  PENDING_RENEWAL = 'PENDING_RENEWAL'
}

export enum ReportType {
  INCIDENT = 'INCIDENT',
  NEAR_MISS = 'NEAR_MISS',
  HAZARD = 'HAZARD',
  OBSERVATION = 'OBSERVATION'
}

export enum UserRole {
  GENERAL_DIRECTOR = 'GENERAL_DIRECTOR',
  HR_MANAGER = 'HR_MANAGER',
  SAFETY_MANAGER = 'SAFETY_MANAGER',
  QUALITY_MANAGER = 'QUALITY_MANAGER',
  SECURITY_MANAGER = 'SECURITY_MANAGER',
  CAMO_MANAGER = 'CAMO_MANAGER',
  TRAINING_MANAGER = 'TRAINING_MANAGER',
  HEAD_FLIGHT_OPS = 'HEAD_FLIGHT_OPS',
  HEAD_MAINTENANCE = 'HEAD_MAINTENANCE',
  HEAD_GROUND_HANDLING = 'HEAD_GROUND_HANDLING',
  HEAD_CARGO = 'HEAD_CARGO',
  HEAD_ENGINEERING = 'HEAD_ENGINEERING'
}

export interface Department {
  id: string;
  name: string;
  code: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Position {
  id: string;
  title: string;
  description: string;
  departmentId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Function {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeDocument {
  id: string;
  title: string;
  type: DocumentType;
  documentUrl: string;
  expiryDate?: string;
  status: DocumentStatus;
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeTraining {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'PLANNED' | 'IN_PROGRESS' | 'COMPLETED';
  createdAt: string;
  updatedAt: string;
}

export interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  positionId: string;
  departmentId: string;
  status: EmployeeStatus;
  startDate: string;
  documents: EmployeeDocument[];
  trainings: EmployeeTraining[];
  functions: EmployeeFunction[];
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeFunction {
  id: string;
  employeeId: string;
  functionId: string;
  assignedAt: string;
}

export interface Document {
  id: string;
  employeeId: string;
  documentType: DocumentType;
  documentUrl: string;
  signed: boolean;
  expirationDate?: string;
  createdAt: string;
}

export interface License {
  id: string;
  employeeId: string;
  licenseName: string;
  issueDate: string;
  expirationDate: string;
  status: LicenseStatus;
  documentUrl: string;
  createdAt: string;
}

export interface Leave {
  id: string;
  employeeId: string;
  type: LeaveType;
  startDate: string;
  endDate: string;
  comment?: string;
  createdAt: string;
}

export interface DisciplinaryRecord {
  id: string;
  employeeId: string;
  recordDate: string;
  type: string;
  description: string;
  createdAt: string;
}

export interface Reminder {
  id: string;
  employeeId?: string;
  relatedDocumentId?: string;
  reminderType: ReminderType;
  reminderDate: string;
  status: ReminderStatus;
  createdAt: string;
}

export interface EmployeeSchedule {
  id: string;
  employeeId: string;
  date: string;
  shift: string;
  createdAt: string;
  updatedAt: string;
}

export interface ActivityLog {
  id: string;
  employeeId: string;
  action: string;
  timestamp: string;
}
