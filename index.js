let main = document.querySelector("main#main");
main.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.innerHTML = "Ray is the champion";
document.body.appendChild(newHeader);
