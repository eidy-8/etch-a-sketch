function changeBlack(event){
    const square = event.target;
    square.style.backgroundColor = "black";
}

const container = document.querySelector("#container");
const side = 16;

for(let i = 1; i <= side * side; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", changeBlack);
    container.appendChild(square);
}







