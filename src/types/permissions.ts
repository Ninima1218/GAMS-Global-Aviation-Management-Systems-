import { UserRole } from './user';

export enum Permission {
  // Base permissions
  VIEW_ALL_MODULES = 'VIEW_ALL_MODULES',
  VIEW_DOCUMENTS = 'VIEW_DOCUMENTS',

  // Executive permissions
  VIEW_EXECUTIVE_DASHBOARD = 'VIEW_EXECUTIVE_DASHBOARD',
  VIEW_KPI_DASHBOARD = 'VIEW_KPI_DASHBOARD',
  VIEW_MONTHLY_REPORTS = 'VIEW_MONTHLY_REPORTS',
  APPROVE_OBJECTIVES = 'APPROVE_OBJECTIVES',
  MANAGE_TOP_LEVEL_USERS = 'MANAGE_TOP_LEVEL_USERS',

  // Safety permissions
  VIEW_SAFETY_DASHBOARD = 'VIEW_SAFETY_DASHBOARD',
  MANAGE_SAFETY_REPORTS = 'MANAGE_SAFETY_REPORTS',
  VIEW_SAFETY_METRICS = 'VIEW_SAFETY_METRICS',

  // Quality permissions
  VIEW_QUALITY_DASHBOARD = 'VIEW_QUALITY_DASHBOARD',
  MANAGE_QUALITY_REPORTS = 'MANAGE_QUALITY_REPORTS',
  VIEW_QUALITY_METRICS = 'VIEW_QUALITY_METRICS',

  // Security permissions
  VIEW_SECURITY_DASHBOARD = 'VIEW_SECURITY_DASHBOARD',
  MANAGE_SECURITY_REPORTS = 'MANAGE_SECURITY_REPORTS',
  VIEW_SECURITY_METRICS = 'VIEW_SECURITY_METRICS',

  // Maintenance permissions
  VIEW_MAINTENANCE_DASHBOARD = 'VIEW_MAINTENANCE_DASHBOARD',
  MANAGE_MAINTENANCE_REPORTS = 'MANAGE_MAINTENANCE_REPORTS',
  VIEW_MAINTENANCE_METRICS = 'VIEW_MAINTENANCE_METRICS',
  MANAGE_MAINTENANCE = 'MANAGE_MAINTENANCE',

  // HR permissions
  VIEW_HR_DASHBOARD = 'VIEW_HR_DASHBOARD',
  MANAGE_HR_REPORTS = 'MANAGE_HR_REPORTS',
  VIEW_HR_METRICS = 'VIEW_HR_METRICS',

  // Training permissions
  VIEW_TRAINING_DASHBOARD = 'VIEW_TRAINING_DASHBOARD',
  MANAGE_TRAINING_REPORTS = 'MANAGE_TRAINING_REPORTS',
  VIEW_TRAINING_METRICS = 'VIEW_TRAINING_METRICS',
  MANAGE_TRAINING = 'MANAGE_TRAINING',

  // Flight Operations permissions
  VIEW_FLIGHT_OPS_DASHBOARD = 'VIEW_FLIGHT_OPS_DASHBOARD',
  MANAGE_FLIGHT_OPS_REPORTS = 'MANAGE_FLIGHT_OPS_REPORTS',
  VIEW_FLIGHT_OPS_METRICS = 'VIEW_FLIGHT_OPS_METRICS',

  // Ground Handling permissions
  VIEW_GROUND_HANDLING_DASHBOARD = 'VIEW_GROUND_HANDLING_DASHBOARD',
  MANAGE_GROUND_HANDLING_REPORTS = 'MANAGE_GROUND_HANDLING_REPORTS',
  VIEW_GROUND_HANDLING_METRICS = 'VIEW_GROUND_HANDLING_METRICS',

  // Cargo permissions
  VIEW_CARGO_DASHBOARD = 'VIEW_CARGO_DASHBOARD',
  MANAGE_CARGO_REPORTS = 'MANAGE_CARGO_REPORTS',
  VIEW_CARGO_METRICS = 'VIEW_CARGO_METRICS',

  // Engineering permissions
  VIEW_ENGINEERING_DASHBOARD = 'VIEW_ENGINEERING_DASHBOARD',
  MANAGE_ENGINEERING_REPORTS = 'MANAGE_ENGINEERING_REPORTS',
  VIEW_ENGINEERING_METRICS = 'VIEW_ENGINEERING_METRICS',

  // Safety Management
  VIEW_ALL_SAFETY_REPORTS = 'view_all_safety_reports',
  MANAGE_RISK_ASSESSMENTS = 'manage_risk_assessments',
  ASSIGN_RISK_ASSESSMENT = 'assign_risk_assessment',
  MANAGE_CPAS = 'manage_cpas',
  MANAGE_HAZARD_REGISTER = 'manage_hazard_register',
  MANAGE_SAFETY_COMMUNICATION = 'manage_safety_communication',
  MANAGE_SAFETY_KPIS = 'manage_safety_kpis',
  APPROVE_INVESTIGATIONS = 'approve_investigations',
  CATEGORIZE_REPORTS = 'categorize_reports',

  // Quality & Audits
  SCHEDULE_AUDITS = 'schedule_audits',
  CREATE_AUDIT_CHECKLISTS = 'create_audit_checklists',
  MANAGE_AUDIT_FINDINGS = 'manage_audit_findings',
  ASSIGN_AUDIT_CPAS = 'assign_audit_cpas',
  VIEW_DOCUMENT_VERSIONS = 'view_document_versions',
  MONITOR_AUDIT_PERFORMANCE = 'monitor_audit_performance',
  LINK_FINDINGS = 'link_findings',

  // Security Management
  TRACK_SECURITY_TRENDS = 'track_security_trends',
  ACCESS_SECURITY_MANUALS = 'access_security_manuals',
  ASSIGN_SECURITY_ACTIONS = 'assign_security_actions',
  SEND_SECURITY_ALERTS = 'send_security_alerts',

  // Postholder Operations
  RECEIVE_ASSIGNED_REPORTS = 'receive_assigned_reports',
  ASSESS_RISKS = 'assess_risks',
  IMPLEMENT_ACTIONS = 'implement_actions',
  UPLOAD_EVIDENCE = 'upload_evidence',
  WRITE_FEEDBACK = 'write_feedback',
  VIEW_DEPARTMENT_TRAINING = 'view_department_training',
  VIEW_DEPARTMENT_PERFORMANCE = 'view_department_performance',

  // Operational Staff
  SUBMIT_REPORTS = 'submit_reports',
  VIEW_OWN_REPORTS = 'view_own_reports',
  ACKNOWLEDGE_POLICIES = 'acknowledge_policies',
  COMPLETE_TRAINING = 'complete_training',
  RECEIVE_SAFETY_COMMUNICATIONS = 'receive_safety_communications',
  UPLOAD_CPA_EVIDENCE = 'upload_cpa_evidence',

  // Common
  CREATE_SAFETY_REPORT = 'create_safety_report',

  // New permissions
  MANAGE_SAFETY = 'manage_safety',
  MANAGE_QUALITY = 'manage_quality',
  APPROVE_DOCUMENTS = 'approve_documents',
  APPROVE_CHANGES = 'approve_changes',
  VIEW_DEPARTMENT_DATA = 'view_department_data',
  EDIT_DEPARTMENT_DATA = 'edit_department_data'
}

export const RolePermissions: Record<UserRole, Permission[]> = {
  // Top Management
  [UserRole.GENERAL_DIRECTOR]: [
    Permission.VIEW_ALL_MODULES,
    Permission.VIEW_EXECUTIVE_DASHBOARD,
    Permission.VIEW_KPI_DASHBOARD,
    Permission.VIEW_MONTHLY_REPORTS,
    Permission.APPROVE_OBJECTIVES,
    Permission.MANAGE_TOP_LEVEL_USERS,
    Permission.VIEW_DOCUMENTS
  ],

  // Management Roles
  [UserRole.SAFETY_MANAGER]: [
    Permission.VIEW_ALL_SAFETY_REPORTS,
    Permission.MANAGE_RISK_ASSESSMENTS,
    Permission.ASSIGN_RISK_ASSESSMENT,
    Permission.MANAGE_CPAS,
    Permission.MANAGE_HAZARD_REGISTER,
    Permission.MANAGE_SAFETY_COMMUNICATION,
    Permission.MANAGE_SAFETY_KPIS,
    Permission.APPROVE_INVESTIGATIONS,
    Permission.CATEGORIZE_REPORTS,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.QUALITY_MANAGER]: [
    Permission.SCHEDULE_AUDITS,
    Permission.CREATE_AUDIT_CHECKLISTS,
    Permission.MANAGE_AUDIT_FINDINGS,
    Permission.ASSIGN_AUDIT_CPAS,
    Permission.VIEW_DOCUMENT_VERSIONS,
    Permission.MONITOR_AUDIT_PERFORMANCE,
    Permission.LINK_FINDINGS,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.SECURITY_MANAGER]: [
    Permission.MANAGE_SECURITY_REPORTS,
    Permission.TRACK_SECURITY_TRENDS,
    Permission.ACCESS_SECURITY_MANUALS,
    Permission.ASSIGN_SECURITY_ACTIONS,
    Permission.SEND_SECURITY_ALERTS,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  // Department Heads (Postholders)
  [UserRole.HEAD_FLIGHT_OPS]: [
    Permission.RECEIVE_ASSIGNED_REPORTS,
    Permission.ASSESS_RISKS,
    Permission.IMPLEMENT_ACTIONS,
    Permission.UPLOAD_EVIDENCE,
    Permission.WRITE_FEEDBACK,
    Permission.VIEW_DEPARTMENT_TRAINING,
    Permission.VIEW_DEPARTMENT_PERFORMANCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.HEAD_MAINTENANCE]: [
    Permission.RECEIVE_ASSIGNED_REPORTS,
    Permission.ASSESS_RISKS,
    Permission.IMPLEMENT_ACTIONS,
    Permission.UPLOAD_EVIDENCE,
    Permission.WRITE_FEEDBACK,
    Permission.VIEW_DEPARTMENT_TRAINING,
    Permission.VIEW_DEPARTMENT_PERFORMANCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.CAMO_MANAGER]: [
    Permission.RECEIVE_ASSIGNED_REPORTS,
    Permission.ASSESS_RISKS,
    Permission.IMPLEMENT_ACTIONS,
    Permission.UPLOAD_EVIDENCE,
    Permission.WRITE_FEEDBACK,
    Permission.VIEW_DEPARTMENT_TRAINING,
    Permission.VIEW_DEPARTMENT_PERFORMANCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.HEAD_GROUND_HANDLING]: [
    Permission.RECEIVE_ASSIGNED_REPORTS,
    Permission.ASSESS_RISKS,
    Permission.IMPLEMENT_ACTIONS,
    Permission.UPLOAD_EVIDENCE,
    Permission.WRITE_FEEDBACK,
    Permission.VIEW_DEPARTMENT_TRAINING,
    Permission.VIEW_DEPARTMENT_PERFORMANCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.HEAD_CARGO]: [
    Permission.RECEIVE_ASSIGNED_REPORTS,
    Permission.ASSESS_RISKS,
    Permission.IMPLEMENT_ACTIONS,
    Permission.UPLOAD_EVIDENCE,
    Permission.WRITE_FEEDBACK,
    Permission.VIEW_DEPARTMENT_TRAINING,
    Permission.VIEW_DEPARTMENT_PERFORMANCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.HEAD_ENGINEERING]: [
    Permission.RECEIVE_ASSIGNED_REPORTS,
    Permission.ASSESS_RISKS,
    Permission.IMPLEMENT_ACTIONS,
    Permission.UPLOAD_EVIDENCE,
    Permission.WRITE_FEEDBACK,
    Permission.VIEW_DEPARTMENT_TRAINING,
    Permission.VIEW_DEPARTMENT_PERFORMANCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.HEAD_CABIN_CREW]: [
    Permission.RECEIVE_ASSIGNED_REPORTS,
    Permission.ASSESS_RISKS,
    Permission.IMPLEMENT_ACTIONS,
    Permission.UPLOAD_EVIDENCE,
    Permission.WRITE_FEEDBACK,
    Permission.VIEW_DEPARTMENT_TRAINING,
    Permission.VIEW_DEPARTMENT_PERFORMANCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.HEAD_TRAINING]: [
    Permission.RECEIVE_ASSIGNED_REPORTS,
    Permission.ASSESS_RISKS,
    Permission.IMPLEMENT_ACTIONS,
    Permission.UPLOAD_EVIDENCE,
    Permission.WRITE_FEEDBACK,
    Permission.VIEW_DEPARTMENT_TRAINING,
    Permission.VIEW_DEPARTMENT_PERFORMANCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  // Operational Staff
  [UserRole.PILOT]: [
    Permission.SUBMIT_REPORTS,
    Permission.VIEW_OWN_REPORTS,
    Permission.ACKNOWLEDGE_POLICIES,
    Permission.COMPLETE_TRAINING,
    Permission.RECEIVE_SAFETY_COMMUNICATIONS,
    Permission.UPLOAD_CPA_EVIDENCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.ENGINEER]: [
    Permission.SUBMIT_REPORTS,
    Permission.VIEW_OWN_REPORTS,
    Permission.ACKNOWLEDGE_POLICIES,
    Permission.COMPLETE_TRAINING,
    Permission.RECEIVE_SAFETY_COMMUNICATIONS,
    Permission.UPLOAD_CPA_EVIDENCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.TECHNICIAN]: [
    Permission.SUBMIT_REPORTS,
    Permission.VIEW_OWN_REPORTS,
    Permission.ACKNOWLEDGE_POLICIES,
    Permission.COMPLETE_TRAINING,
    Permission.RECEIVE_SAFETY_COMMUNICATIONS,
    Permission.UPLOAD_CPA_EVIDENCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.GROUND_HANDLER]: [
    Permission.SUBMIT_REPORTS,
    Permission.VIEW_OWN_REPORTS,
    Permission.ACKNOWLEDGE_POLICIES,
    Permission.COMPLETE_TRAINING,
    Permission.RECEIVE_SAFETY_COMMUNICATIONS,
    Permission.UPLOAD_CPA_EVIDENCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.CABIN_CREW]: [
    Permission.SUBMIT_REPORTS,
    Permission.VIEW_OWN_REPORTS,
    Permission.ACKNOWLEDGE_POLICIES,
    Permission.COMPLETE_TRAINING,
    Permission.RECEIVE_SAFETY_COMMUNICATIONS,
    Permission.UPLOAD_CPA_EVIDENCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.CARGO_HANDLER]: [
    Permission.SUBMIT_REPORTS,
    Permission.VIEW_OWN_REPORTS,
    Permission.ACKNOWLEDGE_POLICIES,
    Permission.COMPLETE_TRAINING,
    Permission.RECEIVE_SAFETY_COMMUNICATIONS,
    Permission.UPLOAD_CPA_EVIDENCE,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  // Support Roles
  [UserRole.DOCUMENTATION_MANAGER]: [
    Permission.VIEW_DOCUMENT_VERSIONS,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ],

  [UserRole.HR_MANAGER]: [
    Permission.VIEW_DEPARTMENT_TRAINING,
    Permission.MANAGE_TOP_LEVEL_USERS,
    Permission.VIEW_DOCUMENTS,
    Permission.CREATE_SAFETY_REPORT
  ]
};

export const checkPermission = (userRole: UserRole, permission: Permission): boolean => {
  return RolePermissions[userRole].includes(permission);
};

export interface ProtectedResource {
  requiredPermission: Permission;
  fallbackComponent?: React.ComponentType;
  errorMessage?: string;
} 