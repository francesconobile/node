const fs = require('fs');

const content = 'testo di prova';


const filePath = './example.txt';


fs.writeFile(filePath, content, 'utf8', (err) => {
  if (err) {
    console.error('Errore durante la scrittura del file:', err);
  } else {
    console.log('File scritto con successo!');
  }
});