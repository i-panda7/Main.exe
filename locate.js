console.log(":: WILL LOAD MODULES :: \n locate.js ✅");

const path = require('path');
const { spawn } = require('child_process');

// Path to the express.js file within the 'website' directory
const expressScript = path.join(__dirname, 'express', 'express.js');

// Spawn a child process to run express.js using Node.js
const child = spawn('node', [expressScript]);

// Capture and log stdout from the child process
child.stdout.on('data', (data) => {
    console.log(`${data}`);
});

// Capture and log stderr from the child process
child.stderr.on('data', (data) => {
    console.error(`express.js error:\n${data}`);
});

// Log when the child process exits
child.on('close', (code) => {
    console.log(`express.js process exited with code ${code}`);
});
