console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (INPUT) => {
  const name = INPUT.toString().trim();
  console.log(`Your name is: ${name}`);
  process.stdin.end();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
