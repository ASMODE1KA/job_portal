require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const db = require('./db');

const app = express();
const port = process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send('Welcome to the Job Portal API!');
});
// Test database connection
db.getConnection()
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
