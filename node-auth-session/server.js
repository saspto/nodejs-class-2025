const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'views')));

// Hardcoded user credentials
const users = {
  user1: 'password123',
  admin: 'adminpass'
};

// Middleware to check authentication
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    return next();
  } else {
    return res.redirect('/login');
  }
};

// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'views', 'home.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, 'views', 'login.html')));

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (users[username] && users[username] === password) {
    req.session.user = username;
    res.send(`
      <script>
        localStorage.setItem('username', '${username}');
        window.location.href = '/dashboard';
      </script>
    `);
  } else {
    res.send(`
      <script>
        alert('Invalid credentials. Try again.');
        window.location.href = '/login';
      </script>
    `);
  }
});

app.get('/dashboard', isAuthenticated, (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.send(`
      <script>
        localStorage.removeItem('username');
        window.location.href = '/logout-page';
      </script>
    `);
  });
});

app.get('/logout-page', (req, res) => res.sendFile(path.join(__dirname, 'views', 'logout.html')));
