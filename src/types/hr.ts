export enum EmployeeStatus {
  ACTIVE = 'ACTIVE',
  ON_LEAVE = 'ON_LEAVE',
  TERMINATED = 'TERMINATED',
  SUSPENDED = 'SUSPENDED'
}

export enum DocumentType {
  PASSPORT = 'PASSPORT',
  CONTRACT = 'CONTRACT',
  CERTIFICATE = 'CERTIFICATE',
  LICENSE = 'LICENSE',
  MEDICAL_CLEARANCE = 'MEDICAL_CLEARANCE',
  TRAINING_CERTIFICATE = 'TRAINING_CERTIFICATE',
  DIPLOMA = 'DIPLOMA',
  OTHER = 'OTHER'
}

export enum DocumentStatus {
  VALID = 'VALID',
  EXPIRED = 'EXPIRED',
  PENDING_RENEWAL = 'PENDING_RENEWAL',
  REVOKED = 'REVOKED'
}

export interface Department {
  id: string;
  name: string;
  code: string;
  headId?: string;
  parentDepartmentId?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Position {
  id: string;
  title: string;
  departmentId: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeDocument {
  id: string;
  employeeId: string;
  type: DocumentType;
  title: string;
  fileUrl: string;
  status: DocumentStatus;
  issueDate: string;
  expiryDate?: string;
  issuedBy: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeTraining {
  id: string;
  employeeId: string;
  title: string;
  provider: string;
  startDate: string;
  endDate: string;
  status: 'COMPLETED' | 'IN_PROGRESS' | 'PLANNED' | 'CANCELLED';
  certificateUrl?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeFunction {
  id: string;
  employeeId: string;
  title: string;
  description: string;
  isOperational: boolean;
  isRegulatory: boolean;
  assignedDate: string;
  assignedBy: string;
  createdAt: string;
  updatedAt: string;
}

export interface Employee {
  id: string;
  employeeId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  photoUrl?: string;
  positionId: string;
  departmentId: string;
  supervisorId?: string;
  status: EmployeeStatus;
  startDate: string;
  endDate?: string;
  documents: EmployeeDocument[];
  trainings: EmployeeTraining[];
  functions: EmployeeFunction[];
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DisciplinaryRecord {
  id: string;
  employeeId: string;
  type: 'WARNING' | 'VIOLATION' | 'CORRECTIVE_ACTION';
  description: string;
  date: string;
  reportedBy: string;
  severity: 'LOW' | 'MEDIUM' | 'HIGH';
  status: 'OPEN' | 'CLOSED' | 'APPEALED';
  resolution?: string;
  createdAt: string;
  updatedAt: string;
}

export interface EmployeeSchedule {
  id: string;
  employeeId: string;
  type: 'VACATION' | 'TRAINING' | 'DUTY' | 'LEAVE';
  startDate: string;
  endDate: string;
  status: 'PLANNED' | 'APPROVED' | 'REJECTED' | 'CANCELLED';
  approvedBy?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ActivityLog {
  id: string;
  employeeId: string;
  action: string;
  details: string;
  performedBy: string;
  timestamp: string;
} 