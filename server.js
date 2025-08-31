app.get('/connect', (req, res) => {
    const b64data = req.query.b64;
    if (b64data) {
        console.log('Received data:', b64data); // logs in Render
        res.send('Data received successfully ✅');
    } else {
        res.status(400).send('No data received');
    }
});
