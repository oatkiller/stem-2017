1. Download `cats.jpg`, `receive_file.js`, and `send_file.js`
1. Run `node send_file.js cats.jpg`
  - This is the server
  - The argument is the name of the file you would like to send
1. Run `node receive_file.js localhost roberts_cats.jpg`
  - This the client
  - The first argument is the host to connect to
    - If you are running the server on your own computer, use `localhost`
    - If the server is running on another computer, pass the IP address of that computer
  - The second argument is the name to save the received file under
1. Check for a file called `roberts_cats.jpg`

# Try passing a different file
1. When running `node send_file.js`, pass a different file path
  - e.g. `node send_file.js c:\Users\robert\Desktop\other_cat_pic.jpg`

# Try saving the file with a different name
1. When running `node receive_file.js`, pass a different file name
  - e.g. `node receive_file.js localhost boring_file_name`

# Try it with a partner
1. One student should run the server (`node send_file.js cats.jpg`
1. The other student should run the client, passing the first student's IP address
  - e.g.
  - `node receive_file.js 192.168.1.11 roberts_cats.jpg`
1. Run `node receive_file.js`
  - See if you can transfer the file
