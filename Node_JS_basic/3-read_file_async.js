const fs = require('fs').promises;

async function countStudents(path) {
  let data;
  try {
    data = await fs.readFile(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.trim().split('\n');
  const studentCounts = {};

  for (const line of lines.slice(1)) {
    const [firstName, , , field] = line.split(',').map((item) => item.trim()); // Ignore lastname and age

    if (firstName && field) {
      if (!studentCounts[field]) {
        studentCounts[field] = [];
      }
      studentCounts[field].push(firstName);
    }
  }
  const totalStudents = Object.values(studentCounts).reduce((sum, arr) => sum + arr.length, 0);
  console.log(`Number of students: ${totalStudents}`);
  for (const [field, names] of Object.entries(studentCounts)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}
module.exports = countStudents;
