const http = require('http')
const fs = require('fs')
const names = require('./names.json')

http.createServer(
  function(request, response) {
    console.log(request.method, request.url)
    if (request.url === '/') {
      response.setHeader('Content-Type', 'text/html')
      response.end('<script src="js.js"></script>')
    } else if (request.url === '/js.js') {
      response.setHeader('Content-Type', 'application/js')
      const javascriptCode = fs.readFileSync('./browser_code.js')
      response.end(javascriptCode)
    } else {
      // means json
      response.setHeader('Content-Type', 'application/javascript')
      const namesJSON = fs.readFileSync('./names.json')
      response.end(namesJSON)

    }
  }
).listen(3000)
