function changeBlack(event){
    const square = event.target;
    square.style.backgroundColor = "black";
}

function generate() {
    let input = prompt("Please enter a side value:");
    return input;
}

const container = document.querySelector("#container");
input = 16;

for(let i = 1; i <= input * input; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    const percent = 100/(input);
    square.setAttribute("style", `height: ${percent}%; width: ${percent}%; outline:solid black;`);   

    square.addEventListener("mouseover", changeBlack);
    container.appendChild(square);
}

const btn = document.querySelector("#btn");
btn.addEventListener('click', () => {
    let input = prompt("Please enter a side value:");
});

console.log(input);









