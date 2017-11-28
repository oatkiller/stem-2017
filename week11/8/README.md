# Putting it all together
Using everything that you have written from these exercises, make a web app that allows users to see their todo items, and add new todo items.

## Tips
Define the `items` array outside of the handler function. You need to define it only one time, when the server starts.

Put the forms values into a variable, and add one value to the `items` array:

```js
const values = await parse(request)
items.push(values['new-item'])
```
