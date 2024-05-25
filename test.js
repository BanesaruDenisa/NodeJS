const bcrypt = require('bcryptjs');

const password = 'password1234';
const hashedPassword = '$2a$10$GNRfXg1oBslbnrHZSjS4SuGud3TYv7pQJ3C/rN5EQgXIKqHwKR17.';

bcrypt.compare(password, hashedPassword, (err, result) => {
  if (err) {
    console.error('Eroare la comparare:', err);
  } else {
    console.log('Parola este validă?', result);
  }
});
