document.querySelector("main#main").remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "Brandon Weaver is the champion";
document.body.append(newHeader);
