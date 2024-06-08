// Import the express module
const express = require('express');

// Create an instance of the express application
const app = express();

// Define the port to run the server on
const PORT = 3000;

// Use express to serve static files from the 'web' directory
app.use(express.static('web'));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/web/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
