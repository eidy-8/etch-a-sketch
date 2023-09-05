function changeColor(event){
    let square = event.target;
    square.style.backgroundColor = currentInkColor;
}

function colorChanger(){
    const randomInt1 = Math.floor(Math.random() * 255);
    const randomInt2 = Math.floor(Math.random() * 255);
    const randomInt3 = Math.floor(Math.random() * 255);
    currentInkColor = `rgb(${randomInt1}, ${randomInt2}, ${randomInt3})`;
    return currentInkColor;
}

function rgb(event){
    let square = event.target;
    currentInkColor = colorChanger();
}

function erase(){
    container.innerHTML = "";
    currentInkColor = "black";
}

function generateGrid(){
    container.innerHTML = "";

    let input = prompt("Please enter a side value (limit: 100):");

    if(input > 100 || input < 0){
        do {
            input = prompt("Invalid value! Please enter another side value (limit: 100):");
        }
        while (input > 100 || input < 0);
    }   

    for(let i = 1; i <= input * input; i++){
        let square = document.createElement("div");
        square.classList.add("square");
    
        let percent = 100/(input);
        square.setAttribute("style", `height: ${percent}%; width: ${percent}%; outline:solid;`);   
    
        square.addEventListener("mouseover", changeColor);

        container.appendChild(square);
    }
}

let currentInkColor = "black"; //This is the default color

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

btn1.addEventListener("click", generateGrid);
btn2.addEventListener("click", rgb);
btn3.addEventListener("click", erase);











