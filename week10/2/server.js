const http = require('http')
const fs = require('fs')
const port = 3000

function handleRequest(request, response) {
  console.log('Method', request.method, 'url', request.url, 'connection', request.socket.remoteAddress)

  // Content-Type does for HTTP what file extensions do for you operating system
  // They tell the client what type of file it is receiving
  response.setHeader('Content-Type', 'text/html')

  if (request.method === 'POST') {
    request.on(
      'data',
      function(data) {
        console.log('receieved message:', data.toString())
      }
    )
    response.write('<h1>Thanks for the message</h1>')
  }

  // Read index.html and send it to the client
  fs.createReadStream('index.html').pipe(response)
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
