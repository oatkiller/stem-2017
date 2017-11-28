const http = require('http')
const fs = require('fs')
const port = 3000

function handleRequest(request, response) {
  //console.log('Method', request.method, 'url', request.url, 'connection', request.socket.remoteAddress)
  console.log(request.url)

  if (request.url === '/time') {
    response.end('The current time is' + request.socket.remoteAddress)
  } else if (request.url === '/ip') {
    response.end('Your address is ' + request.socket.remoteAddress)
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
