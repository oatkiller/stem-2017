Let's make a todo list app. A todo list allows the user to add items, see what they have left to do, and remove items that are done. If you are very experienced at programming, you could let users mark items as 'done' without removing them. Users could also edit items, or change the order of items. That's a lot. For now, let's just make a todo list app that only works from the terminal and only shows a set list of items. The user can't change the items yet, or remove them, or do anything interesting except see the things that they still need to do. 

Open up todo.js in your text editor (VSCode) and read the code there. We create an array of strings. Each string represents the item that the user would have added. The `console.log` part prints the todo list out.

Run the todo list app like so:

`node todo.js`

You should see something like this:

`[ 'brush my teeth', 'play with my cats', 'play final fantasy' ]`

# Exercise
Modify the todo list app to show this instead:

```
1. brush my teeth
2. play with my cats
3. play final fantasy
```

Good luck!

## Tips

You can run a single line of code once for each item in an array. To do this, you need to use a for-loop.

Check out this code:

```js
const letters = [ 'a', 'b', 'c' ]
for (let letter of letters) {
  console.log(letter)
}
```

This will make a temporary variable called `letter` for *each item* in the array. The code after `{` and before `}` will be run, and then the variable will be re-assigned to the next letter in the array. Try running the code in node.
