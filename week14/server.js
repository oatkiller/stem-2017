const http = require('http')
const nodeStatic = require('node-static')
const socketIO = require('socket.io')

const fileServer = new nodeStatic.Server('./public')

const webServer = http.createServer(
  function(request, response) {
    request.addListener('end', function() {
      fileServer.serve(request, response)
    }).resume()
  }
)

const socketServer = socketIO.listen(webServer)

socketServer.on(
  'connection',
  function(socket) {
    console.log('user connected')

    var lastTime = null

    socket.on('chatMessage', function(message) {
      console.log('user sent message: ', message)

      const now = (new Date).getTime()

      if (lastTime === null || now - lastTime > 2000) {
        lastTime = now

        message = message.substring(0, 512)

        socket.broadcast.emit('chatMessage', message)
        socket.emit('chatMessage', message)
      } else {
        socket.emit('rateLimited', true)
      }
    })
    socket.on(
      'disconnect',
      function() {
        console.log('user disconnected')
      }
    )
  }
)

webServer.listen(3000)
