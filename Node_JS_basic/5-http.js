const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let responseText = 'This is the list of our students\n';
    try {
      const data = await countStudents(process.argv[2]);
      responseText += data.join('\n');
      res.end(responseText);
    } catch (error) {
      responseText += error.message;
      res.end(responseText);
    }
  }
});

app.listen(1245);

module.exports = app;
