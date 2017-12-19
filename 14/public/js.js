var socket = io();
console.log(socket)

const form = document.forms[0]

form.
  addEventListener(
    'submit',
    function(event) {
      event.preventDefault()
      socket.emit(
        'message',
        form.message.value
      )
      form.message.value = ''
    }
  )

socket.on('message', function(message) {
  const list = document.getElementById('messages')
  const item = document.createElement('li')
  item.textContent = message
  list.appendChild(item)
})
