export enum ReportStatus {
  SUBMITTED = 'SUBMITTED',
  READ = 'READ',
  IN_REVIEW = 'IN_REVIEW',
  FORWARDED = 'FORWARDED',
  RESOLVED = 'RESOLVED'
}

export interface ReportResponse {
  id: string;
  reportId: string;
  responderId: string;
  responderRole: string;
  responseText: string;
  timestamp: Date;
  forwardedToDepartment?: string;
}

export interface ReportStatusUpdate {
  id: string;
  reportId: string;
  status: ReportStatus;
  updatedBy: string;
  updatedAt: Date;
  comment?: string;
} 