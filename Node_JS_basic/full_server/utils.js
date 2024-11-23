import fs from 'fs/promises';

const readDatabase = (filePath) => new Promise(async (resolve, reject) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n').slice(1);
    const studentsByField = {};

    lines.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    });

    resolve(studentsByField);
  } catch (error) {
    reject(new Error('Cannot load the database'));
  }
});

export default readDatabase;
