If you completed the assignment in the /1 directory, you understand how an array of strings can be used to show the items of a todo list. But using the terminal doesn't suit everyone. Let's modify the program to show the todo list in a web browser.

You will need to use node's `http` module.

Here is some sample code that will start an http server:

```js
const http = require('http')

function handleRequest(request, response) {
  response.end('Hello world!')
}

const server = http.createServer(handleRequest)

server.listen(3000)

```

Put that code into a file called `todo.js` and then run

```sh
node todo.js
```

Running this command shouldn't show you anything in the terminal, because you didn't print anything. Instead you started an http server.

Open your browser and navigate to `http://localhost:3000`. This should show you a web page that says:

```
Hello world!
```

# Exercise
Starting with the example code above, and the code you wrote in the exercise before, create a web server that prints out the todo list items from an array.

# Important tips

## `response.end`
You can only use `response.end` once for each response, but you can use `response.write` any number of times *BEFORE YOU USE* `response.end`

### Example

```js
const http = require('http')

function handleRequest(request, response) {
  response.end('Hello\n')
  response.end('world!')
}

const server = http.createServer(handleRequest)

server.listen(3000)

```

## New lines
You can add a new line in JavaScript by writing a string that includes:
```
\n
```

That is a backslash followed by `n`. `n` is short for newline. 

Try running some code like this:
```js
console.log('hey\nwhats up')
```

'hey' and 'whats up' will be on separate lines.
