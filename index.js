console.log(':: THE PROCESS STARTS ::  index.js ✅ \n\n\n\n');

const path = require('path');
const { spawn } = require('child_process');

// Path to the locate.js file
const locateScript = path.join(__dirname, 'locate.js');

// Spawn a child process to run locate.js using Node.js
const child = spawn('node', [locateScript]);

// Capture and log stdout from the child process
child.stdout.on('data', (data) => {
    console.log(`${data}`);
});

// Capture and log stderr from the child process
child.stderr.on('data', (data) => {
    console.error(`locate.js error:\n${data}`);
});

// Log when the child process exits
child.on('close', (code) => {
    console.log(`locate.js process exited with code ${code}`);
});
