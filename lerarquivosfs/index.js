const fs = require('fs/promises');
const path = require('path');

// C:\Users\Delarue\Downloads

fs.readdir(path.join('/', 'Users', 'Delarue','Downloads'))
  .then(files =>{
    console.log(files)
})