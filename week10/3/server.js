const http = require('http')
const fs = require('fs')
const port = 3000
const parse = require('co-body')

const messages = []

const formHTML = fs.readFileSync('index.html')

async function handleRequest(request, response) {
  console.log('Method', request.method, 'url', request.url, 'connection', request.socket.remoteAddress)

  // Content-Type does for HTTP what file extensions do for you operating system
  // They tell the client what type of file it is receiving
  response.setHeader('Content-Type', 'text/html')

  if (request.method === 'POST') {
    // get the message that was sent
    const body = await parse(request)
    messages.unshift(body.message)
  }

  // Read index.html and send it to the client
  response.write(formHTML)

  // print each message in a paragraph tag
  for (let message of messages) {
    response.write('<p>' + message + '</p>')
  }
  response.end()
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
