const { response } = require('express');
const express = require('express');
const puppeteer = require('puppeteer');

const server = express(); 

server.get('/', async (request, response) => {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.agazeta.com.br/es/transito/');


    const pageContent = await page.evaluate(() => {
   
        return {
          
          header: document.querySelector('.kicker').innerHTML,
          title: document.querySelector('.titulo').innerHTML,
          subtitle: document.querySelector('.linha-fina').innerHTML,

         //title: document.querySelectorAll('header div.titulo')
         //title: document.querySelectorAll('header p.linha-fina')
        
};

    });
  
    //pegar dados de uma pagina

    await browser.close();

    response.send({
    
    "Cabeçalho": pageContent.header,
    "Titulo": pageContent.title,
    "Subtitulo": pageContent.subtitle,
  
  });

});



const port = 3000;

server.listen(port, () => {
  console.log(`Servidor Rodando em http://localhost:${port} ...`)
});

