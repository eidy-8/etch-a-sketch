function changeBlack(event){
    const square = event.target;
    square.style.backgroundColor = "black";
}

function generate() {
    //algum codigo que apague o container anterior... 
    let input = prompt("Please enter a side value:");

    for(let i = 1; i <= input * input; i++){
        const square = document.createElement("div");
        square.classList.add("square");
    
        const percent = 100/(input);
        square.setAttribute("style", `height: ${percent}%; width: ${percent}%; outline:solid black;`);   
    
        square.addEventListener("mouseover", changeBlack);
        container.appendChild(square);
    }
}

for(let i = 1; i <= 256; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    const percent = 100/(16);
    square.setAttribute("style", `height: ${percent}%; width: ${percent}%; outline:solid black;`);   

    square.addEventListener("mouseover", changeBlack);
    container.appendChild(square);
}


const btn = document.querySelector("#btn");
btn.addEventListener("click", generate);










