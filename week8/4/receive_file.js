const net = require('net')
const fs = require('fs')

const client = net.connect(
  1337,
  'localhost'
)
client.on(
  'connect',
  function() {
    client.pipe(fs.createWriteStream('received_file.jpg'))
  }
)
