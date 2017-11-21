const http = require('http')
const fs = require('fs')
const port = 3000

function handleRequest(request, response) {
  console.log('Method', request.method, 'url', request.url, 'connection', request.socket.remoteAddress)

  if (request.method === 'GET') {
    if (request.url === '/') {
      // Content-Type does for HTTP what file extensions do for you operating system
      // They tell the client what type of file it is receiving
      response.setHeader('Content-Type', 'text/html')

      // Read index.html and send it to the client
      fs.createReadStream('index.html').pipe(response)
    } else if (request.url === '/cats.jpg') {

      response.setHeader('Content-Type', 'image/jpeg')
      fs.createReadStream('cats.jpg').pipe(response)
    }
  }
}

const server = http.createServer(handleRequest)

server.listen(
  port,
  function(error) {
    if (error) {
      console.log('Something went wrong', error)
    } else {
      console.log('Listening on port: ', port)
    }
  }
)
