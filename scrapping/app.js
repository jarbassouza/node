
// Convert Json para CSV separado por virgula
// Obs.: o Json tem que esta no padrão

// require json-2-csv module
const converter = require('json-2-csv');
const fs = require('fs');


const transitoHoje = JSON.parse(fs.readFileSync('transitoHoje.json'));
 // convert JSON array to CSV string
converter.json2csv(transitoHoje, (err, csv) => {
  if (err) {
      throw err;
  }

  // print CSV string
  console.log(csv);

  // write CSV to a file
  fs.writeFileSync('transitoHoje.csv', csv);
  
});