const express = require('express');
const sequelize = require('./config/database');
const app = express();
exports.app = app;
const PORT = process.env.PORT || 5000;
exports.PORT = PORT;
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const enrollmentRoutes = require('./routes/enrollmentRoutes');
const authenticateToken = require('./middleware/auth');

// Middleware
app.use(express.json());

// Sync models
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/courses', authenticateToken, courseRoutes); // Example of protected route
app.use('/api/enrollments', authenticateToken, enrollmentRoutes); // Example of protected route

// Default route
app.get('/', (req, res) => {
  res.send('Hello World!');
});


