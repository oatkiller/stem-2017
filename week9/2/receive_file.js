const net = require('net')
const fs = require('fs')

const hostToConnectTo = process.argv[2]

const client = net.connect(
  1337,
  hostToConnectTo
)
client.on(
  'connect',
  function() {
    const fileNameToSaveTo = process.argv[3]
    client.pipe(fs.createWriteStream(fileNameToSaveTo))
  }
)
