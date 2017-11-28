Now that you can return HTML from your webserver, you can create HTML forms. HTML forms let the user enter data and send that data with a POST request. Try running the following server and navigating to it:

```js
const http = require('http')
function handleRequest(request, response) {

  response.setHeader('Content-Type', 'text/html')
  if (request.method === 'GET') {
    response.end(`
      <form method="POST">
        <button type="submit">Post!</button>
      </form>
      `)
  } else {
    response.end('You posted!')
  }

}
const server = http.createServer(handleRequest)
server.listen(3000)
```

Can you figure out what this does?

The browser normally does a GET request. But when the user clicks the button in the form, it does a POST request instead.

The handler is called in both cases. The `if` statement is used to decide how to behave. If the method is GET, the server
shows the form.
If the method is POST, the server tells the user that they 'posted'.

# Exercise

Modify the code above to print out the TODO list after the form. When a POST request happens, add a new item to the todo list. You don't yet have a way to let the user enter text, so just make some up. The next exercise will explain how to allow the user to pass text.
