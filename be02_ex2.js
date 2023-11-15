const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const copyFile = promisify(fs.copyFile);

// Accept command-line arguments
const [,, sourceDir, targetDir] = process.argv;

if (!sourceDir || !targetDir) {
  console.log("Please provide both source and target directory paths.");
  process.exit(1);
}

// File extensions to filter for
const allowedExtensions = ['.txt', '.jpg']; 

// Read the contents of the source directory
readdir(sourceDir)
  .then(files => {
    // Filter files with allowed extensions
    const filteredFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return allowedExtensions.includes(ext);
    });

    // Copy filtered files to the target directory
    filteredFiles.forEach(file => {
      const sourceFile = path.join(sourceDir, file);
      const targetFile = path.join(targetDir, file);

      copyFile(sourceFile, targetFile)
        .then(() => {
          console.log(`Copied ${file} to ${targetDir}`);
        })
        .catch(err => {
          console.error(`Error copying ${file}: ${err}`);
        });
    });
  })
  .catch(err => {
    console.error(`Error reading directory: ${err}`);
  });
