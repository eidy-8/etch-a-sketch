function changeColor(event){
    let square = event.target;
    square.style.backgroundColor = currentInkColor; // Set the default color if the button Rainbow is off
    if (verificar2) {
        square.style.backgroundColor = rainbow();
    }

    if(verificar3) {
        square.style.backgroundColor = "";
    }

    if(verificar5) {
        const redInput = document.getElementById("red");
        const greenInput = document.getElementById("green");
        const blueInput = document.getElementById("blue");
        const previewColor = document.querySelector(".color-preview");
        const applyButton = document.getElementById("btn5");
        
        const red = redInput.value;
        const green = greenInput.value;
        const blue = blueInput.value;
        square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


        btn5.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}

function rainbow(){
    const randomColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
    return randomColor;
}

function eraseAll(){
    container.innerHTML = "";
    btn1.textContent = "Choose A Side Value";
}

function generateGrid(){
    container.innerHTML = "";
    btn1.textContent = "Chosse Another Side Value";

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
    
        let percent = 100 / input;
        square.setAttribute("style", `height: ${percent}%; width: ${percent}%;`);   
    
        square.addEventListener("mousedown", startDrawing);
        square.addEventListener("mousemove", drawWhileMouseMoving);
        square.addEventListener("mouseup", stopDrawing);

        container.appendChild(square);
    }
}

function updateColorPreview() {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;
    previewColor.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

let isDrawing = false; // Flag to track if the mouse button is held down

function startDrawing(event) {
    isDrawing = true;
    event.preventDefault(); // Method in JavaScript that is used to prevent the default behavior of an event
    changeColor(event); // Start drawing when the mouse button is pressed
}

function stopDrawing() {
    isDrawing = false;
}

function drawWhileMouseMoving(event) {
    if (isDrawing) {
        changeColor(event); // Continue drawing while the mouse is moving
    }
}

let currentInkColor = "black"; //This is the default color
let verificar2 = false; 
let verificar3 = false;
let verificar5 = false;

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');

btn1.addEventListener("click", generateGrid);

btn2.addEventListener("click", () => {
    verificar2 = !verificar2;
    if (verificar2 == true) {
        btn2.style.backgroundColor = "green";
    } else {
        btn2.style.backgroundColor = "red";
    }
});

btn3.addEventListener("click", () => {
    verificar3 = !verificar3;
    if (verificar3 == true) {
        btn3.style.backgroundColor = "green";
    } else {
        btn3.style.backgroundColor = "red";
    }
});

btn4.addEventListener("click", eraseAll);

btn5.addEventListener("click", () => {
    verificar5 = !verificar5;
});













