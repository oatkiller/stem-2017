const http = require('http')
const nodeStatic = require('node-static')
const socketIO = require('socket.io')

const fileServer = new nodeStatic.Server('./public')

const webServer = http.createServer(
  function(request, response) {
    request.addListener('end',
      function() {
        fileServer.serve(request, response)
      }
    ).resume()
  }
)

const socketServer = socketIO.listen(webServer)

socketServer.on('connection', function(socket) {
  console.log('got a socket connection')
})

webServer.listen(3000)
