const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'web')));
app.use(express.json());

app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'password.html'));
});

app.post('/check-password', (req, res) => {
    const { password } = req.body;
    if (password === process.env.passwordweb) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'web', 'home.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
