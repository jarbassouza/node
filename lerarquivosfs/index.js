
const fs = require('fs/promises');
const path = require('path');

//Este script lista todos os arquivos no formato "avi" ou "mp4"da pasta ducumentos

fs.readdir(path.join('c:/','Users','Delarue','Desktop','AcompanhametoSp'))
  .then(files =>{

    //Filtro de arquivos por extensão
    const acceptedExtension = ['.avi', '.txt', '.mp4', '.js']

    const arquivoFiltrado = files.filter(file => file.endsWith('.mp4') || file.endsWith('.avi') )
    
    //console.log(arquivoFiltrado);

    arquivoFiltrado.forEach(myFunction)

    function myFunction(item, index, arr) {
      arr[index] = item.split('_');
      console.log(arr[index]);
     // console.log(item);
    }
})