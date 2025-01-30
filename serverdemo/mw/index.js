// index.js

const express = require('express');
const app = express();

// Middleware 1: Logger Middleware
app.use((req, res, next) => {
 console.log(`${req.method} request made to: ${req.url}`);
 next(); // Pass control to the next middleware or route handler
});

// Middleware 2: Authentication Middleware (mock example)
app.use((req, res, next) => {
 const authToken = req.headers['auth-token'];
  
 // Check if an 'auth-token' header exists and is valid (for simplicity, we assume the token is "12345")
 if (!authToken || authToken !== '12345') {
  return res.status(403).send('Forbidden: Invalid token');
 }
 next(); // Pass control to the next middleware or route handler
});

// Route handler (this will be executed after passing through the middlewares)
app.get('/welcome', (req, res) => {
 res.send('Welcome to the protected route!');
});

// Error-handling middleware
app.use((err, req, res, next) => {
 console.error(err);
 res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(3000, () => {
 console.log('Server running on http://localhost:3000');
});