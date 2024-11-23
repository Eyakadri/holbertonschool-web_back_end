const http = require('http');
const fs = require('fs').promises;

const processStudentData = (data) => {
  const lines = data.trim().split('\n').slice(1);
  const studentsByField = {};
  lines.forEach((line) => {
    const [firstName, , , field] = line.split(',');
    if (!studentsByField[field]) {
      studentsByField[field] = [];
    }
    studentsByField[field].push(firstName);
  });
  return studentsByField;
};

const formatResponse = (studentsByField) => {
  const response = ['This is the list of our students'];
  const totalStudents = Object.values(studentsByField)
    .reduce((sum, students) => sum + students.length, 0);
  response.push(`Number of students: ${totalStudents}`);
  Object.entries(studentsByField).forEach(([field, students]) => {
    response.push(
      `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
    );
  });

  return response.join('\n');
};
const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const data = await fs.readFile(process.argv[2], 'utf8');
      const studentsByField = processStudentData(data);
      res.end(formatResponse(studentsByField));
    } catch (error) {
      res.end('This is the list of our students\nCannot load the database');
    }
  }
});

app.listen(1245);

module.exports = app;
