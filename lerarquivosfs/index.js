
const fs = require('fs/promises');
const path = require('path');


fs.readdir(path.join('/', 'Users', 'Delarue', 'Documents'))
  .then(files =>{

    //Filtro de arquivos por extensão
    const acceptedExtension = ['.zip', '.txt', '.mp4', '.js']

    const arquivoFiltrado = files.filter(file => file.endsWith('.txt'))

    console.log(arquivoFiltrado)
})

