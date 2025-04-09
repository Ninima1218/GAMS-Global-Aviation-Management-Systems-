const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { UserRole, Permission } = require('../src/types/user');

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Middleware
app.use(cors());
app.use(express.json());

// Mock database
const users = [
  {
    id: '1',
    email: 'test@example.com',
    password: bcrypt.hashSync('password123', 10),
    firstName: 'Test',
    lastName: 'User',
    role: UserRole.GENERAL_DIRECTOR,
    permissions: [
      Permission.VIEW_ALL_MODULES,
      Permission.VIEW_EXECUTIVE_DASHBOARD,
      Permission.VIEW_KPI_DASHBOARD,
      Permission.VIEW_MONTHLY_REPORTS,
      Permission.APPROVE_OBJECTIVES,
      Permission.MANAGE_TOP_LEVEL_USERS,
      Permission.VIEW_DOCUMENTS
    ]
  }
];

// Auth middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

// Routes
// Auth routes
app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.json({
    token,
    user: {
      id: user.id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      permissions: user.permissions
    }
  });
});

// User routes
app.get('/api/users/me', authenticateToken, (req, res) => {
  const user = users.find(u => u.id === req.user.id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
    permissions: user.permissions
  });
});

// Role management
app.post('/api/users/switch-role', authenticateToken, (req, res) => {
  const { role } = req.body;
  const user = users.find(u => u.id === req.user.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Update user role and permissions
  user.role = role;
  user.permissions = getPermissionsForRole(role);

  res.json({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    role: user.role,
    permissions: user.permissions
  });
});

// Dashboard data routes
app.get('/api/dashboard/:role', authenticateToken, (req, res) => {
  const { role } = req.params;
  
  // Mock dashboard data based on role
  const dashboardData = getDashboardData(role);
  res.json(dashboardData);
});

// Report routes
app.post('/api/reports', authenticateToken, (req, res) => {
  const { title, content, type } = req.body;
  
  // Mock report creation
  const report = {
    id: Date.now().toString(),
    title,
    content,
    type,
    authorId: req.user.id,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  res.status(201).json(report);
});

// Helper functions
function getPermissionsForRole(role) {
  const basePermissions = [
    Permission.VIEW_ALL_MODULES,
    Permission.VIEW_DOCUMENTS
  ];

  switch (role) {
    case UserRole.GENERAL_DIRECTOR:
      return [
        ...basePermissions,
        Permission.VIEW_EXECUTIVE_DASHBOARD,
        Permission.VIEW_KPI_DASHBOARD,
        Permission.VIEW_MONTHLY_REPORTS,
        Permission.APPROVE_OBJECTIVES,
        Permission.MANAGE_TOP_LEVEL_USERS
      ];
    case UserRole.SAFETY_MANAGER:
      return [
        ...basePermissions,
        Permission.VIEW_SAFETY_DASHBOARD,
        Permission.MANAGE_SAFETY_REPORTS,
        Permission.VIEW_SAFETY_METRICS
      ];
    // Add other roles as needed
    default:
      return basePermissions;
  }
}

function getDashboardData(role) {
  // Mock dashboard data
  const baseData = {
    metrics: [
      { id: 1, name: 'Safety Rating', value: 95, change: 2 },
      { id: 2, name: 'On-Time Performance', value: 88, change: -1 },
      { id: 3, name: 'Customer Satisfaction', value: 92, change: 3 }
    ],
    recentReports: [
      {
        id: 1,
        title: 'Monthly Safety Report',
        date: '2024-03-01',
        status: 'completed'
      }
    ]
  };

  // Add role-specific data
  switch (role) {
    case UserRole.GENERAL_DIRECTOR:
      return {
        ...baseData,
        executiveMetrics: [
          { id: 4, name: 'Revenue', value: '$1.2M', change: 5 },
          { id: 5, name: 'Cost Reduction', value: '12%', change: 3 }
        ]
      };
    case UserRole.SAFETY_MANAGER:
      return {
        ...baseData,
        safetyMetrics: [
          { id: 6, name: 'Incidents', value: 2, change: -1 },
          { id: 7, name: 'Near Misses', value: 5, change: -2 }
        ]
      };
    default:
      return baseData;
  }
}

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 