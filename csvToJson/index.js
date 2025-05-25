/*
Este script convert uma planilha csv para json
// npm install csvtojson
*/

// Importando o módulo csvtojson e fs
const csvtojson = require("csvtojson");
const fs = require("fs");
const { json } = require("stream/consumers");

// Definindo o caminho do arquivo CSV
const csvfilepath = "c:/Users/Delarue/Desktop/AcompanhametoSp/simple.csv";

csvtojson()
  .fromFile(csvfilepath)
  .then((json) => {
    console.log(json);
    // Definindo o caminho do arquivo JSON de saída
    const jsonFilePath = "c:/Users/Delarue/Desktop/AcompanhametoSp/simple.json";
    // Escrevendo o JSON no arquivo
    fs.writeFileSync(
      jsonFilePath,
      JSON.stringify(json, null, 2),
      "utf-8",
      (err) => {
        if (err) {
          console.error("Erro ao escrever o arquivo JSON:", err);
        } else {
          console.log("Arquivo JSON criado com sucesso!");
        }
      }
    );
  });