const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const dbName = 'path/to/your/database.csv';
    fs.readFile(dbName, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error reading the database\n');
        return;
      }
      const students = data
        .split('\n')
        .filter((line) => line.trim() !== '')
        .map((line) => line.trim());

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(`This is the list of our students\n${students.join('\n')}\n`);
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
