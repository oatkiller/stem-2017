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
  console.log('user connected')

  socket.on('disconnect', function() {
    console.log('user disconnected')
  })

  socket.on('message', function(message) {
    socketServer.emit(
      'message',
      message,
      { for: 'everyone' }
    )
  })
})

webServer.listen(3000)
