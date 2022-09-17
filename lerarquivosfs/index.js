
const fs = require('fs/promises');
const path = require('path');

// C:\Users\Delarue\Downloads

fs.readdir(path.join('/', 'Users', 'Delarue','Downloads'))
  .then(files =>{

    const acceptedExtension = ['.zip', '.rar', 'exe']

    const executables = files.filter(file => file.endsWith('.exe'))

    console.log(executables)
})
