const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/test', (req, res) => {
    res.send('<h1>Hello there</h1>');
});

app.listen(PORT, () => {
    console.log(`Listerning on port ${PORT}`);
});
