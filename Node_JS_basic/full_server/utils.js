import fs from 'fs/promises';

const readDatabase = (filePath) => fs.readFile(filePath, 'utf8')
  .then((data) => {
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
  })
  .catch(() => {
    throw new Error('Cannot load the database');
  });

export default readDatabase;
