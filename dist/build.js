const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

/*
// Define the source and destination directories
const srcDir = path.join(__dirname, '/');
const destDir = path.join(__dirname, '/dist');

// Create the destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir);
}

// Copy all files from the source directory to the destination directory
fs.readdirSync(srcDir).forEach(file => {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);
  fs.copyFileSync(srcFile, destFile);
});
*/

// Install production dependencies
exec('npm install --production', (err, stdout, stderr) => {
  if (err) {
    console.error(`Error installing dependencies: ${stderr}`);
    return;
  }
  console.log(`Dependencies installed: ${stdout}`);
});

console.log('Build completed successfully.');
