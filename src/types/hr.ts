
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

export interface Department {
  id: string;
  name: string;
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

export interface Employee {
  id: string;
  fullName: string;
  photoUrl?: string;
  positionId: string;
  departmentId: string;
  email: string;
  phone: string;
  supervisorId?: string;
  employmentDate: string;
  status: EmployeeStatus;
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
