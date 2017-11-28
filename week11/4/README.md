If you haven't finished `javascripting`, don't even think about trying this exercise. Go finish `javascripting` already!

In order for the user to command your server to add a new item to the list, you will need to be able to handle POST requests. When the browser loads a web page, it uses GET requests.

GET requests are used to ask for some data back. POST requests are used when the client is asking the server to modify something.

You can check the type of request by asking node for the request's 'method':

```js
const http = require('http')
function handleRequest(request, response) {
  // print the type of request out to the server log
  console.log(request.method)

  // print the type of request out to the web browser as well
  response.end(request.method)
}

const server = http.createServer(handleRequest)
server.listen(3000)
```

# Exercise

Try putting the above code in a file, running it in node, and navigating to `http://localhost:3000`

What do you see? Why?
