const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files (your templates folder)
app.use(express.static('templates'));

// POST endpoint for /connect
app.post('/connect', (req, res) => {
    console.log('Data received:', req.body);
    res.send('Data received successfully!');
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
