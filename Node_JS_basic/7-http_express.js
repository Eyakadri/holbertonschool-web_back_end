const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await fs.readFile(process.argv[2], 'utf8');
    const lines = data.trim().split('\n').slice(1);
    const studentsByField = {};
    
    lines.forEach(line => {
      const [firstName, , , field] = line.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    });

    const totalStudents = Object.values(studentsByField)
      .reduce((sum, students) => sum + students.length, 0);

    let response = ['This is the list of our students'];
    response.push(`Number of students: ${totalStudents}`);
    
    Object.entries(studentsByField).forEach(([field, students]) => {
      response.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });

    res.status(200).send(response.join('\n'));
  } catch (error) {
    res.status(200).send('This is the list of our students\nCannot load the database');
  }
});

app.listen(port);

module.exports = app;
