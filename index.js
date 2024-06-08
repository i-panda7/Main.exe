const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'web')));

app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'password.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'home.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
