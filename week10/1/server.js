const http = require('http')
const fs = require('fs')
const port = 3000

function handleRequest(request, response) {
  console.log('Method', request.method, 'url', request.url, 'connection', request.socket.remoteAddress)

  response.end('Your address is ' + request.socket.remoteAddress)
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
