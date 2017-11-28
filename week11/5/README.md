In order to send a POST request from an HTML page, you will need a form (or JavaScript). We will use a form. First you need to be able to send HTML from our server. It works just like sending plain text, except you need to specify a content type. A content type works a lot like a file extension. It tells the browser how to treat data it gets back. Sending a content type of text/html is like giving a file an extension of .html. Without it, the browser will not treat your HTML markup like anything special.

Try putting the following code into a file and running it. Navigate to the server as usual

```js
const http = require('http')
function handleRequest(request, response) {
  response.end('<strong>Bold</strong> <em>italic</em>')
}
const server = http.createServer(handleRequest)
server.listen(3000)
```

You will see the HTML code, but it won't have been turned into HTML elements. Now try modifying the code to return the content type in an HTTP header.

HTTP headers are extra data that tell the browser how to treat the data.

```js
const http = require('http')
function handleRequest(request, response) {
  response.setHeader('Content-Type', 'text/html')
  response.end('<strong>Bold</strong> <em>italic</em>')
}
const server = http.createServer(handleRequest)
server.listen(3000)
```

Try running the now code and loading the page in the browser. You should now see something like:

*Bold* _italic_

# Exercise

Modify your solution from /2 to use HTML. Add the content-type header. You will need to use some tags to make your list look like a list.

## Tips
* `\n` will not make a line break in HTML. You can use `<br />` instead.
* The `<ol>` and `<li>` tags can be used to make a list.

Check out the resources below.

* [OL element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol#Examples)
* [Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
* [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
