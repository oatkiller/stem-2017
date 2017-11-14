const net = require('net')
const fs = require('fs')

const server = net.createServer(
  handleConnection
)

const port = 1337

server.listen(port, '0.0.0.0')

console.log('Listening on port ' + port)

const fileNameToSend = process.argv[2]

function handleConnection(client) {
  console.log('Client connected')
  client.setEncoding('utf-8')

  client.
    on(
      'data',
      function(data) {
        console.log('Message from client:\n\n')
        console.log(data)

        console.log('\nSending ' + fileNameToSend)
        const file = fs.readFileSync(fileNameToSend)
        client.write(
          'HTTP/1.1 200 OK\n\n' + file,
          function() {
            client.end()
          }
        )
      }
    )
}
