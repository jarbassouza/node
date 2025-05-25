
/*
  O código lê um arquivo CSV chamado 'arquivo.csv', 
  divide seu conteúdo em linhas,
  e para cada linha, divide-a em colunas usando 
  a vírgula como delimitador.
*/


const fs = require ('fs')

fs.readFile('arquivo.csv', (err, contents) => {
    const lines = contents.toString().split('\n')
    lines.forEach(line => console.log(line.split(',')))
    //console.log(lines)
})  

