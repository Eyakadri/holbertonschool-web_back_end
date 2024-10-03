console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (INPUT) => {
  const name = INPUT.toString().trim(); // Get the name and trim whitespace
  console.log(`Your name is: ${name}`); // Display the user's name
});

process.stdin.on('end', () => {
  console.log('This important software is now closing'); // Closing message
});
