const fs = require('fs')
const net = require('net')

const server = net.createServer(
  handleConnection
)

const port = 1337

server.listen(port, '0.0.0.0')

console.log('Listening on port ' + port)

function handleConnection(client) {

  const file = fs.readFileSync('cats.jpg')

  client.
    write(
      file,
      function() {
        client.end()
      }
    )

  console.log('Sent file to ' + client.remoteAddress)
}
