// Write your code here!
let main = document.querySelector("main#main");
main.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.innerText = "Emmanuel is the champion"
document.body.appendChild(newHeader);