Being able to see your todo list using a Web browser is good. Now you need to be able to add another item. This will be kind of hard. You need to understand how to _dynamically_ add a value to an array. Arrays have a 'method' called 'push' that adds a new item to an array. 

The following code will create an array of strings (todo items) and print each one out:
```js
const items = [ 'first item', 'second item', 'third item' ]
for (let item of items) {
  console.log(item) 
}
```

If you want to dynamically modify the `items` array, you can use `push`:
```js
const items = [ 'first item', 'second item', 'third item' ]
items.push('fourth item')
items.push('fifth item')
for (let item of items) {
  console.log(item) 
}
```

Put the code above into a file and run it with node.

Using push will allow you to add items to the list dynamically while the server is running, in response to a user's request.
