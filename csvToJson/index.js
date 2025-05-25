'use strict'

/*
Este scrip convert uma planilha csv para json
*/ 

// Importando o módulo csvtojson
// npm install csvtojson

const csvtojson = require('csvtojson')
const path = require('path')


 const arquivo = path.join(
    "c:/",
    "Users",
    "Delarue",
    "Desktop",
    "AcompanhametoSp",
    "simple.csv"
  );
// const arquivo = "c:/Users/Delarue/Desktop/AcompanhametoSp/simple.csv"

const csvfilepath = arquivo

csvtojson()
.fromFile(csvfilepath)
.then((json) => {
    console.log(json)
})