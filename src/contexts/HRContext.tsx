import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  Employee, 
  Department, 
  Position, 
  EmployeeDocument, 
  EmployeeTraining,
  EmployeeFunction,
  DisciplinaryRecord,
  EmployeeSchedule,
  ActivityLog,
  EmployeeStatus
} from '../types/hr';

interface HRContextType {
  // Employees
  employees: Employee[];
  getEmployee: (id: string) => Employee | undefined;
  addEmployee: (employee: Omit<Employee, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateEmployee: (id: string, employee: Partial<Employee>) => Promise<void>;
  deleteEmployee: (id: string) => Promise<void>;

  // Departments
  departments: Department[];
  getDepartment: (id: string) => Department | undefined;
  addDepartment: (department: Omit<Department, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateDepartment: (id: string, department: Partial<Department>) => Promise<void>;
  deleteDepartment: (id: string) => Promise<void>;

  // Positions
  positions: Position[];
  getPosition: (id: string) => Position | undefined;
  addPosition: (position: Omit<Position, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updatePosition: (id: string, position: Partial<Position>) => Promise<void>;
  deletePosition: (id: string) => Promise<void>;

  // Documents
  addDocument: (employeeId: string, document: Omit<EmployeeDocument, 'id' | 'employeeId' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateDocument: (id: string, document: Partial<EmployeeDocument>) => Promise<void>;
  deleteDocument: (id: string) => Promise<void>;

  // Training
  addTraining: (employeeId: string, training: Omit<EmployeeTraining, 'id' | 'employeeId' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateTraining: (id: string, training: Partial<EmployeeTraining>) => Promise<void>;
  deleteTraining: (id: string) => Promise<void>;

  // Functions
  addFunction: (employeeId: string, func: Omit<EmployeeFunction, 'id' | 'employeeId' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateFunction: (id: string, func: Partial<EmployeeFunction>) => Promise<void>;
  deleteFunction: (id: string) => Promise<void>;

  // Disciplinary Records
  addDisciplinaryRecord: (employeeId: string, record: Omit<DisciplinaryRecord, 'id' | 'employeeId' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateDisciplinaryRecord: (id: string, record: Partial<DisciplinaryRecord>) => Promise<void>;
  deleteDisciplinaryRecord: (id: string) => Promise<void>;

  // Schedules
  addSchedule: (employeeId: string, schedule: Omit<EmployeeSchedule, 'id' | 'employeeId' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateSchedule: (id: string, schedule: Partial<EmployeeSchedule>) => Promise<void>;
  deleteSchedule: (id: string) => Promise<void>;

  // Activity Logs
  activityLogs: ActivityLog[];
  addActivityLog: (log: Omit<ActivityLog, 'id' | 'timestamp'>) => Promise<void>;

  // Loading and error states
  isLoading: boolean;
  error: string | null;
}

const HRContext = createContext<HRContextType | undefined>(undefined);

export const HRProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [positions, setPositions] = useState<Position[]>([]);
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mock data loading
  useEffect(() => {
    const loadMockData = async () => {
      setIsLoading(true);
      try {
        // Mock departments
        const mockDepartments: Department[] = [
          {
            id: '1',
            name: 'Accountable Executive',
            code: 'AE',
            description: 'Top management responsible for overall airline operations',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '2',
            name: 'Safety Department',
            code: 'SD',
            description: 'Responsible for safety management and incident reporting',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '3',
            name: 'Quality Assurance Department',
            code: 'QAD',
            description: 'Ensures compliance with quality standards and regulations',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '4',
            name: 'Security Department',
            code: 'SD',
            description: 'Manages security protocols and threat assessment',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '5',
            name: 'CAMO Department',
            code: 'CAMO',
            description: 'Continuing Airworthiness Management Organization',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '6',
            name: 'AMO Department',
            code: 'AMO',
            description: 'Aircraft Maintenance Organization',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '7',
            name: 'Flight Operations Department',
            code: 'FOD',
            description: 'Manages flight operations and crew scheduling',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '8',
            name: 'Legal Department',
            code: 'LD',
            description: 'Handles legal matters and compliance',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '9',
            name: 'Ground Handling Department',
            code: 'GHD',
            description: 'Manages ground operations and services',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '10',
            name: 'Cargo Department',
            code: 'CD',
            description: 'Handles cargo operations and logistics',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ];

        // Mock positions
        const mockPositions: Position[] = [
          {
            id: '1',
            title: 'General Director',
            departmentId: '1',
            description: 'Top executive responsible for overall airline operations',
            responsibilities: ['Strategic planning', 'Financial oversight', 'Stakeholder management'],
            requirements: ['MBA or equivalent', '10+ years aviation experience', 'Leadership skills'],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '2',
            title: 'Safety Manager',
            departmentId: '2',
            description: 'Manages safety programs and incident reporting',
            responsibilities: ['Safety management system', 'Incident investigation', 'Risk assessment'],
            requirements: ['Aviation safety certification', '5+ years safety experience', 'Analytical skills'],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '3',
            title: 'Quality Manager',
            departmentId: '3',
            description: 'Ensures compliance with quality standards',
            responsibilities: ['Quality audits', 'Compliance monitoring', 'Process improvement'],
            requirements: ['Quality management certification', '5+ years quality experience', 'Attention to detail'],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '4',
            title: 'HR Manager',
            departmentId: '11',
            description: 'Manages human resources and personnel',
            responsibilities: ['Recruitment', 'Training', 'Employee relations'],
            requirements: ['HR certification', '5+ years HR experience', 'Interpersonal skills'],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ];

        // Mock employees
        const mockEmployees: Employee[] = [
          {
            id: '1',
            employeeId: 'EMP001',
            firstName: 'John',
            lastName: 'Smith',
            email: 'john.smith@airline.com',
            phone: '+1234567890',
            positionId: '1',
            departmentId: '1',
            status: EmployeeStatus.ACTIVE,
            startDate: '2020-01-01',
            documents: [],
            trainings: [],
            functions: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '2',
            employeeId: 'EMP002',
            firstName: 'Jane',
            lastName: 'Doe',
            email: 'jane.doe@airline.com',
            phone: '+1234567891',
            positionId: '2',
            departmentId: '2',
            status: EmployeeStatus.ACTIVE,
            startDate: '2020-02-01',
            documents: [],
            trainings: [],
            functions: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '3',
            employeeId: 'EMP003',
            firstName: 'Michael',
            lastName: 'Johnson',
            email: 'michael.johnson@airline.com',
            phone: '+1234567892',
            positionId: '3',
            departmentId: '3',
            status: EmployeeStatus.ACTIVE,
            startDate: '2020-03-01',
            documents: [],
            trainings: [],
            functions: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '4',
            employeeId: 'EMP004',
            firstName: 'Sarah',
            lastName: 'Williams',
            email: 'sarah.williams@airline.com',
            phone: '+1234567893',
            positionId: '4',
            departmentId: '11',
            status: EmployeeStatus.ACTIVE,
            startDate: '2020-04-01',
            documents: [],
            trainings: [],
            functions: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            id: '5',
            employeeId: 'EMP005',
            firstName: 'David',
            lastName: 'Brown',
            email: 'david.brown@airline.com',
            phone: '+1234567894',
            positionId: '1',
            departmentId: '7',
            status: EmployeeStatus.ACTIVE,
            startDate: '2020-05-01',
            documents: [],
            trainings: [],
            functions: [],
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ];

        // Mock activity logs
        const mockActivityLogs: ActivityLog[] = [
          {
            id: '1',
            action: 'Employee Created',
            details: 'New employee John Smith was added to the system',
            performedBy: '1',
            employeeId: '1',
            timestamp: new Date().toISOString()
          },
          {
            id: '2',
            action: 'Department Updated',
            details: 'Safety Department information was updated',
            performedBy: '1',
            employeeId: '1',
            timestamp: new Date().toISOString()
          }
        ];

        // Set mock data
        setDepartments(mockDepartments);
        setPositions(mockPositions);
        setEmployees(mockEmployees);
        setActivityLogs(mockActivityLogs);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load mock data');
        setIsLoading(false);
      }
    };

    loadMockData();
  }, []);

  const getEmployee = (id: string) => employees.find(emp => emp.id === id);
  const getDepartment = (id: string) => departments.find(dept => dept.id === id);
  const getPosition = (id: string) => positions.find(pos => pos.id === id);

  const addEmployee = async (employee: Omit<Employee, 'id' | 'createdAt' | 'updatedAt'>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newEmployee: Employee = {
        ...employee,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        documents: [],
        trainings: [],
        functions: []
      };
      setEmployees(prev => [...prev, newEmployee]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add employee');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateEmployee = async (id: string, employee: Partial<Employee>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setEmployees(prev => prev.map(emp => 
        emp.id === id 
          ? { ...emp, ...employee, updatedAt: new Date().toISOString() }
          : emp
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update employee');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteEmployee = async (id: string) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setEmployees(prev => prev.filter(emp => emp.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete employee');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addDepartment = async (department: Omit<Department, 'id' | 'createdAt' | 'updatedAt'>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newDepartment: Department = {
        ...department,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setDepartments(prev => [...prev, newDepartment]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add department');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateDepartment = async (id: string, department: Partial<Department>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setDepartments(prev => prev.map(dept => 
        dept.id === id 
          ? { ...dept, ...department, updatedAt: new Date().toISOString() }
          : dept
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update department');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteDepartment = async (id: string) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setDepartments(prev => prev.filter(dept => dept.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete department');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addPosition = async (position: Omit<Position, 'id' | 'createdAt' | 'updatedAt'>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newPosition: Position = {
        ...position,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setPositions(prev => [...prev, newPosition]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add position');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updatePosition = async (id: string, position: Partial<Position>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setPositions(prev => prev.map(pos => 
        pos.id === id 
          ? { ...pos, ...position, updatedAt: new Date().toISOString() }
          : pos
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update position');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deletePosition = async (id: string) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setPositions(prev => prev.filter(pos => pos.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete position');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addDocument = async (employeeId: string, document: Omit<EmployeeDocument, 'id' | 'employeeId' | 'createdAt' | 'updatedAt'>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newDocument: EmployeeDocument = {
        ...document,
        id: Date.now().toString(),
        employeeId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setEmployees(prev => prev.map(emp => 
        emp.id === employeeId 
          ? { ...emp, documents: [...emp.documents, newDocument] }
          : emp
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add document');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateDocument = async (id: string, document: Partial<EmployeeDocument>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setEmployees(prev => prev.map(emp => ({
        ...emp,
        documents: emp.documents.map(doc => 
          doc.id === id 
            ? { ...doc, ...document, updatedAt: new Date().toISOString() }
            : doc
        )
      })));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update document');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteDocument = async (id: string) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setEmployees(prev => prev.map(emp => ({
        ...emp,
        documents: emp.documents.filter(doc => doc.id !== id)
      })));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete document');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addTraining = async (employeeId: string, training: Omit<EmployeeTraining, 'id' | 'employeeId' | 'createdAt' | 'updatedAt'>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newTraining: EmployeeTraining = {
        ...training,
        id: Date.now().toString(),
        employeeId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setEmployees(prev => prev.map(emp => 
        emp.id === employeeId 
          ? { ...emp, trainings: [...emp.trainings, newTraining] }
          : emp
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add training');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateTraining = async (id: string, training: Partial<EmployeeTraining>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setEmployees(prev => prev.map(emp => ({
        ...emp,
        trainings: emp.trainings.map(t => 
          t.id === id 
            ? { ...t, ...training, updatedAt: new Date().toISOString() }
            : t
        )
      })));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update training');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTraining = async (id: string) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setEmployees(prev => prev.map(emp => ({
        ...emp,
        trainings: emp.trainings.filter(t => t.id !== id)
      })));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete training');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addFunction = async (employeeId: string, func: Omit<EmployeeFunction, 'id' | 'employeeId' | 'createdAt' | 'updatedAt'>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newFunction: EmployeeFunction = {
        ...func,
        id: Date.now().toString(),
        employeeId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      setEmployees(prev => prev.map(emp => 
        emp.id === employeeId 
          ? { ...emp, functions: [...emp.functions, newFunction] }
          : emp
      ));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add function');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateFunction = async (id: string, func: Partial<EmployeeFunction>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setEmployees(prev => prev.map(emp => ({
        ...emp,
        functions: emp.functions.map(f => 
          f.id === id 
            ? { ...f, ...func, updatedAt: new Date().toISOString() }
            : f
        )
      })));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update function');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteFunction = async (id: string) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      setEmployees(prev => prev.map(emp => ({
        ...emp,
        functions: emp.functions.filter(f => f.id !== id)
      })));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete function');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addDisciplinaryRecord = async (employeeId: string, record: Omit<DisciplinaryRecord, 'id' | 'employeeId' | 'createdAt' | 'updatedAt'>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newRecord: DisciplinaryRecord = {
        ...record,
        id: Date.now().toString(),
        employeeId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      // This would typically be stored in a separate collection/table
      console.log('Added disciplinary record:', newRecord);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add disciplinary record');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateDisciplinaryRecord = async (id: string, record: Partial<DisciplinaryRecord>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log('Updated disciplinary record:', id, record);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update disciplinary record');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteDisciplinaryRecord = async (id: string) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log('Deleted disciplinary record:', id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete disciplinary record');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addSchedule = async (employeeId: string, schedule: Omit<EmployeeSchedule, 'id' | 'employeeId' | 'createdAt' | 'updatedAt'>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newSchedule: EmployeeSchedule = {
        ...schedule,
        id: Date.now().toString(),
        employeeId,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      // This would typically be stored in a separate collection/table
      console.log('Added schedule:', newSchedule);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add schedule');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateSchedule = async (id: string, schedule: Partial<EmployeeSchedule>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log('Updated schedule:', id, schedule);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update schedule');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteSchedule = async (id: string) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      console.log('Deleted schedule:', id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete schedule');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const addActivityLog = async (log: Omit<ActivityLog, 'id' | 'timestamp'>) => {
    setIsLoading(true);
    try {
      // TODO: Replace with actual API call
      const newLog: ActivityLog = {
        ...log,
        id: Date.now().toString(),
        timestamp: new Date().toISOString()
      };
      setActivityLogs(prev => [...prev, newLog]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add activity log');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    employees,
    getEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    departments,
    getDepartment,
    addDepartment,
    updateDepartment,
    deleteDepartment,
    positions,
    getPosition,
    addPosition,
    updatePosition,
    deletePosition,
    addDocument,
    updateDocument,
    deleteDocument,
    addTraining,
    updateTraining,
    deleteTraining,
    addFunction,
    updateFunction,
    deleteFunction,
    addDisciplinaryRecord,
    updateDisciplinaryRecord,
    deleteDisciplinaryRecord,
    addSchedule,
    updateSchedule,
    deleteSchedule,
    activityLogs,
    addActivityLog,
    isLoading,
    error
  };

  return (
    <HRContext.Provider value={value}>
      {children}
    </HRContext.Provider>
  );
};

export const useHR = () => {
  const context = useContext(HRContext);
  if (context === undefined) {
    throw new Error('useHR must be used within an HRProvider');
  }
  return context;
}; 