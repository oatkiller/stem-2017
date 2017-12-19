const socket = io()
socket.on('chatMessage', function(message) {
  const item = document.createElement('li')
  item.textContent = message

  document.getElementById('list').
    appendChild(item)
})

socket.on('rateLimited', function(message) {
  alert('You are sending too many messages. stop it')
})

const form = document.forms[0]
form.addEventListener(
  'submit',
  function(event) {
    event.preventDefault()
    socket.emit('chatMessage', form.message.value)
    form.message.value = ''
  }
)
