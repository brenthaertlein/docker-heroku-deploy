const http = require('http');

const requestListener = (req, res) => {
  res.writeHead(200)
  res.end(`Hello World`)
}

const server = http.createServer(requestListener);

const port = process.env.PORT ? Number(process.env.PORT) : 8080;

server.listen(port)
