function changeColor(event){
    let square = event.target;
    square.style.backgroundColor = currentInkColor; // Set the default color if the button Rainbow is off
    if (verificar2) {
        square.style.backgroundColor = rainbow();
    }

    if(verificar3) {
        square.style.backgroundColor = "";
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

container.addEventListener("mouseleave", () => { // Avoid drawing after leaving container
    if (isDrawing) {
        isDrawing = false;
    }
});

let currentInkColor = "black";
let verificar2 = false; 
let verificar3 = false;

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');

btn1.addEventListener("click", generateGrid);

btn2.addEventListener("click", () => {
    verificar2 = !verificar2;
    verificar3 = false;
    btn2.style.backgroundColor = "green";
    btn3.style.backgroundColor = "red";

    if (verificar2 == false) {
        btn2.style.backgroundColor = "red";
    }
});

btn3.addEventListener("click", () => {
    verificar3 = !verificar3;
    verificar2 = false;
    btn2.style.backgroundColor = "red";
    btn3.style.backgroundColor = "green";

    if (verificar3 == false) {
        btn3.style.backgroundColor = "red";
    }
});

btn4.addEventListener("click", eraseAll);













