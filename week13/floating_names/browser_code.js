alert('yo yo yo')
async function main() {
  const response = await fetch(
    'names.json'
  )
  const names = await response.json()
  const firstThree = names.slice(0, 3)
  console.log(firstThree)
  for (let name of firstThree) {
    const div = document.createElement('div')
    div.innerText = name
    div.style.color = '#ff0000'
    document.body.appendChild(div)
  }
}

main()
