export enum UserRole {
  // Top Management
  GENERAL_DIRECTOR = 'GENERAL_DIRECTOR',
  CAMO_MANAGER = 'CAMO_MANAGER',

  // Management Roles
  SAFETY_MANAGER = 'SAFETY_MANAGER',
  QUALITY_MANAGER = 'QUALITY_MANAGER',
  SECURITY_MANAGER = 'SECURITY_MANAGER',
  HR_MANAGER = 'HR_MANAGER',
  TRAINING_MANAGER = 'TRAINING_MANAGER',

  // Department Heads
  HEAD_FLIGHT_OPS = 'HEAD_FLIGHT_OPS',
  HEAD_MAINTENANCE = 'HEAD_MAINTENANCE',
  HEAD_ENGINEERING = 'HEAD_ENGINEERING',
  HEAD_CABIN_CREW = 'HEAD_CABIN_CREW',
  HEAD_GROUND_HANDLING = 'HEAD_GROUND_HANDLING',
  HEAD_CARGO = 'HEAD_CARGO',
  HEAD_TRAINING = 'HEAD_TRAINING',

  // Operational Staff
  PILOT = 'PILOT',
  ENGINEER = 'ENGINEER',
  TECHNICIAN = 'TECHNICIAN',
  GROUND_HANDLER = 'GROUND_HANDLER',
  CABIN_CREW = 'CABIN_CREW',
  CARGO_HANDLER = 'CARGO_HANDLER',

  // Support Roles
  DOCUMENTATION_MANAGER = 'DOCUMENTATION_MANAGER'
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  department?: string;
  permissions: string[];
  subordinates?: string[]; // IDs of users that report to this user
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
} 