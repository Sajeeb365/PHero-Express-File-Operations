const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to Full Stack Development');
});

// Read first.txt file
app.get('/read', (req, res) => {
  fs.readFile('first.txt', 'utf8', (err, data) => {
    if (err) {
      res.send('Error reading file');
    } else {
      res.send(data);
    }
  });
});

// Write first.txt content to second.txt file
app.get('/write', (req, res) => {
  fs.readFile('first.txt', 'utf8', (err, data) => {
    if (err) {
      res.send('Error reading file');
    } else {
      fs.writeFile('second.txt', data, (err) => {
        if (err) {
          res.send('Error writing file');
        } else {
          res.send('File written successfully');
        }
      });
    }
  });
});

// Append text to first.txt file
app.get('/append', (req, res) => {
  const textToAppend = ' No! It will be full not pull ! 😑 ';

  fs.appendFile('first.txt', textToAppend, (err) => {
    if (err) {
      res.send('Error appending to file');
    } else {
      res.send('Text appended successfully');
    }
  });
});

// Delete second.txt file
app.get('/delete', (req, res) => {
  fs.unlink('second.txt', (err) => {
    if (err) {
      res.send('Error deleting file');
    } else {
      res.send('File deleted successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
