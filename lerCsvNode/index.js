
const fs = require ('fs')

fs.readFile('arquivo.csv', (err, contents) => {
    const lines = contents.toString().split('\n')
    lines.forEach(line => console.log(line.split(',')))
    console.log(lines)
})  
