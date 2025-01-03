'use strict'

const app = require('../src/app');
const debug = require("debug")("nodestr:server");
const http = require("http");

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log("API rodando em http://localhost:" + port);

//Função para buscar a porta disponivel ou a 3000
function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

//Função de tratamento de erro
function onError(error) {
  if ((error, syscall !== "listen")) {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe " + port : "port " + port;

  switch (error.code) {
    case "EACCES":
      Console.ERROR(bind + "requires elevated privileges");
      process.exit(1);
      break;

    case "EADDRINUSE":
      Console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening () {
  const addr = server.address();
  const bind = typeof addr === 'string'
  ? 'pipe ' + addr
  : 'port ' + addr.port;
  debug('Listening on ' + bind); 
}
