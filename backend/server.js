// In backend/server.js

const path = require('path'); // Ensure this is at the top

// ... other middleware

// This line serves static files from the project's root folder
app.use(express.static(path.join(__dirname, '..')));

// ... your API routes

// This catch-all route sends index.html for any page request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});
