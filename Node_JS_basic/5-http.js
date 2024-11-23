const http = require('http');
const fs = require('fs').promises;

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = await fs.readFile(process.argv[2], 'utf8');
      const lines = data.trim().split('\n');
      const students = {};
      const fields = lines[0].split(',');

      for (const line of lines.slice(1)) {
        const values = line.split(',');
        const field = values[values.length - 1];
        if (!students[field]) students[field] = [];
        students[field].push(values[0]);
      }

      let response = ['This is the list of our students'];
      const total = Object.values(students).reduce((sum, group) => sum + group.length, 0);
      response.push(`Number of students: ${total}`);
      
      for (const [field, names] of Object.entries(students)) {
        response.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }
      
      res.end(response.join('\n'));
    } catch (error) {
      res.end('This is the list of our students\nCannot load the database');
    }
  }
});

app.listen(1245);

module.exports = app;
