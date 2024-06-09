console.log(':: THE WEBSITE STARTS :: \n express.js ✅');

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Route for serving index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`:: STARTED THE WEBSITE :: \n express.js ✅`);
});
