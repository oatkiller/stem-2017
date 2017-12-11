HTML forms are used to send user input to your server. Forms elements have two interesting attributes:

* action
  - determines what URL to send the request to. This will default to the current page.
* method
  - This can be either 'GET' or 'POST'

These values can be overriden using a button. Button elements can also send a value. Using different buttons can allow your form to do different types of actions. Here is a form that sends one of two values depending on the button pressed.

```html
<form method="POST">
  <button name="answer" value="yes">Yes</button>
  <button name="answer" value="no">No</button>
</form>
```

Try serving this form HTML using an HTTP server and using co-body to parse and log the request values. (See week11/7 for tips.)
