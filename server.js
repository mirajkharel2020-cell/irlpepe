const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Serve static files (index.html in templates)
app.use(express.static('templates'));

// POST endpoint for /connect
app.post('/connect', (req, res) => {
    // Get query param "b64"
    const b64 = req.query.b64;

    // If b64 not in query, fallback to payload from body
    const data = b64 || JSON.stringify(req.body);

    console.log('Data received:', data);

    res.send(`Received: ${data}`);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
