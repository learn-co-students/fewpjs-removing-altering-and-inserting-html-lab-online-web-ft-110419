document.querySelector("main#main").remove()

let newHeader = document.createElement("H1")
newHeader.innerHTML = "Lucy is the champion"
newHeader.setAttribute("id", "victory")
document.body.appendChild(newHeader)
// Write your code here!