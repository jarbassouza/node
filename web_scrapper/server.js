const express = require('express');
const puppeteer = require('puppeteer');

const server = express(); 

server.get('/', async (request, response) => {
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://alura.com.br/formacao-front-end');


    const pageContent = await page.evaluate(() => {
   
        return {
           title: document.querySelector('body section .formacao-headline-titulo').innerHTML,
           subtitle: document.querySelector(' .formacao-headline-subtitulo').innerHTML
        };
    });

    console.log('pageContent:', pageContent);
    
    //pegar dados da pagina da alura
    await browser.close();
   
    response.send({
    
    "id":113709,
    "code":"front-end",
    "kind":"DEGREE",
    "kindDisplayName":"Formação",
    "kindSlugDisplayName":"formacao",
    "situation":"PUBLISHED",
    "title": pageContent.title,
    "subtitle": pageContent.subtitle,
  });
});

const port = 3000;

server.listen(port, () => {
  console.log(`Servidor Rodando em http://localhost:${port} ...`)
});

