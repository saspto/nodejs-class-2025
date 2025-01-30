const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true })); // Parse form data
app.use(session({
 secret: 'secret-key', // Used to sign session ID cookie
 resave: false,
 saveUninitialized: true,
 cookie: { maxAge: 60000 } // Session expires in 1 minute
}));

// Hardcoded user credentials
const users = {
 user1: 'password123',
 admin: 'adminpass'
};

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
 if (req.session.user) {
  return next(); // Proceed if user is authenticated
 } else {
  return res.status(401).send('Unauthorized: Please login first');
 }
};

// Home Route
app.get('/', (req, res) => {
 res.send('<h2>Welcome to the Authentication System</h2>   <p><a href="/login">Login</a> | <a href="/dashboard">Dashboard</a></p>');
});

// Login Page
app.get('/login', (req, res) => {
 res.send( '<h2>Login</h2>   <form method="POST" action="/login">    <label>Username: <input type="text" name="username"></label><br><br>    <label>Password: <input type="password" name="password"></label><br><br>    <button type="submit">Login</button>   </form> ' );
});

// Login Logic
app.post('/login', (req, res) => {
 const { username, password } = req.body;

// Validate user credentials
 if (users[username] && users[username] === password) {
  req.session.user = username; // Store username in session
  res.redirect('/dashboard');
 } else {
  res.status(401).send('Invalid credentials. <a href="/login">Try again</a>');
 }
});

// Protected Dashboard Route
app.get('/dashboard', isAuthenticated, (req, res) => {
 res.send(`
    <h2>Welcome, ${req.session.user}!</h2>   
    <p>You are logged in.</p>   
    <a href="/logout">Logout</a>
    `);
});

// Logout Route
app.get('/logout', (req, res) => {
 req.session.destroy(() => {
  res.send('<h2>You are logged out</h2><a href="/">Go to Home</a>');
 });
});

// Start Server
app.listen(3000, () => {
 console.log('Server running on http://localhost:3000');
});