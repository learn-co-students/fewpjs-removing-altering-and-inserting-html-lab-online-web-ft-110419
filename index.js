main = document.getElementById('main')
main.remove()

let element = document.createElement('div')
document.body.appendChild(element)
element.className = 'header'

let newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')
newHeader.innerHTML = 'YOUR-NAME is the champion'
element.appendChild(newHeader)