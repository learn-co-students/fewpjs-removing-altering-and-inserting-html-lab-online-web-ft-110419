// Write your code here!

let main = document.querySelector("main"); // selected the main html tag

main.remove(); // we can call remove on an element itself

let newHeader = document.createElement("h1"); // We created a new element h1

newHeader.id = "victory"; // set the new h1 id == victory

document.body.appendChild(newHeader); // We have to append the child to the body

newHeader.innerHTML = "Ethan is the champion" // We can set what is in the h1 with innerHTML method 