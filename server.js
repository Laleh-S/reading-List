const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve the React app
app.use(express.static(path.join(__dirname, 'build')));

// Use the JSON server
app.use('/api', jsonServer.router('db.json'));

// Serve the React app for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});