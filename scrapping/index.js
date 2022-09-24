
const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {

  console.log('Aguarde ...')
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
  await page.goto('https://www.agazeta.com.br/es/transito');
 
 

 const pageContent = await page.evaluate (() => {
    
    
        let results = [];
        let items = document.querySelectorAll('header .kicker, header .titulo, header .linha-fina');
       
        items.forEach((item) => {
          results.push([
            item.innerHTML
          ])
        });
         
        return results;
        
        
 });

 console.log(pageContent);

 fs.writeFile('transitoHoje.json', JSON.stringify(pageContent), err => {
  
  if(err) throw new Error ('Algo deu errado')
  

 })

await browser.close();    

})();