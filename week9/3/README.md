# Communicating with Web browsers
Web browsers communicate in a way that is similar to our client programs.

However Web browsers have more sophisticated needs.

1. They need to access multiple files
  - Our servers have only supported sending back a single, predetermined file
1. They also send files (or data similar to files) in both directions
  - e.g. file uploads
1. Tons of other stuff
  - Caching
  - Authentication
  - Having URLs on the Web
  - Links between documents

In order to support all of this, Web browsers use a protocol _on top of TCP_. The protocol is HTTP. In order to support HTTP, your server must use TCP, and it must conform to the standard.

We won't be writing very much of our own HTTP handling code in this class. There are many libaries that do that already. But to get the idea, please read through `server.js`

# Trying out `server.js`

1. Run `node server.js index.html`
1. Navigate to `http://localhost:1337` in Chrome
1. You should see a message
1. Change the contents of `index.html` to say something else
1. Reload your browser tab and confirm that you see a different message

# Try it out w/ a partner

1. Run `node server.js index.html`
1. Have your partner navigate to the page on their computer
  - You will need their IP address
  - e.g. Navigate to http://192.168.1.11:1337`

# Next steps
1. Look at the output logs from your server.
1. Each time a client (Web browser) connects, the HTTP requests that they made is printed out
1. Try navigating to `http://localhost:1337/something`
1. The browser will load the same file, but the request will be different
  - One of the lines will read: `GET /something HTTP/1.1`
  - The URL path `/something` is there
1. By reading the URL path, Web servers can decide to send different files (or dynamic data, like a list of chats or a photo of a cat.)
1. This allows servers to send a variety of data programmatically
