import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2])
      .then((studentsByField) => {
        const output = ['This is the list of our students'];
        
        Object.keys(studentsByField).sort((a, b) => 
          a.localeCompare(b, 'en', { sensitivity: 'base' })
        ).forEach((field) => {
          output.push(
            `Number of students in ${field}: ${studentsByField[field].length}. ` +
            `List: ${studentsByField[field].join(', ')}`
          );
        });
        
        response.status(200).send(output.join('\n'));
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(process.argv[2])
      .then((studentsByField) => {
        const students = studentsByField[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
