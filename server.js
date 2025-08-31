const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'templates')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates', 'index.html'));
});

app.post('/connect', (req, res) => {
    const data = req.body;
    console.log('Received data:', data); // You’ll see this in Render logs
    res.send('Data received!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
