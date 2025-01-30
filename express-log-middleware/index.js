// index.js

const express = require('express');
const app = express();

// Middleware 1: Request Logging Middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString(); // Get the current timestamp
  console.log(`[${timestamp}] ${req.method} request made to: ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

// Middleware 2: Authorization Check
app.use((req, res, next) => {
  const authHeader = req.headers['authorization'];
  
  // Check if the Authorization header contains the word 'admin'
  if (authHeader && authHeader.includes('admin')) {
    req.isAdmin = true; // Add a flag to the request object for later use
  } else {
    req.isAdmin = false;
  }
  next(); // Pass control to the next middleware or route handler
});

// Route handler for /log endpoint
app.get('/log', (req, res) => {
  if (req.isAdmin) {
    res.status(200).send('Admin access granted');
  } else {
    res.status(200).send('User access granted');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
