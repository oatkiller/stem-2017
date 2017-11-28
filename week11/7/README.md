HTML forms can specify inputs which let the user enter text. In order for the server to receive the value, the inputs must be named. Here is an example

```html
<form method="POST">
  <input type="text" name="new-item" />
  <button type="submit">add item</button>
</form>
```

Modify the code from the previous exercise to output this new form instead. Run the code. Make sure the web page looks right.

# Getting the form values

You will first need to install a library called `co-body`

Run the following in your terminal:

```sh
npm install co-body
```

Next try putting this code in a file an running it:

```js
const parse = require('co-body')
const http = require('http')


function handleRequest* (request, response) {

  response.setHeader('Content-Type', 'text/html')
  if (request.method === 'GET') {
    response.end(`
      <form method="POST">
        <input type="text" name="new-item" />
        <button type="submit">add item</button>
      </form>
      `)
  } else {
    console.log(yield parse(request))
    response.end('You posted!')
  }

}
const server = http.createServer(handleRequest)
server.listen(3000)
```

Start the server, load the page in a browser, add an item to the form, and submit the form. Check what is logged in your terminal. You should see something like this:

```js
{ 'new-item': 'my new todo item' }
```

`co-body` returns an object with keys that are the same as your form input names. 


# Exercise

Add additional inputs (with different names, or the same names) and see what the output is.
