When you deleted items using your button, what would happen if two items had the exact same text? How can you delete just the copy that was clicked?

Also, try opening two browser tabs for your site. Add items the the todo list and refresh both items. Next, delete some items using one tab. Then, without refreshing the other tab, delete some other items. Do things work as expected? This is called 'testing'. Software testing is an important part of the process.

If your server uses the position of an item to delete it, that may not work well with two concurrent users. If your server uses equality to determine what item to delete, it may not work well if there are identical items.

Does your code solve for both of these problems? If not, fix it.

# Tips
When you add a new item to the todo list, give it a unique identifier. You can do this by keeping a number around and incrementing it each time you add an item. Instead of storing just the todo text, store the todo text *and* the unique identifier. Use the unique identifier in the form to allow the user to delete exactly what they expect.
