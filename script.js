function changeBlack(event){
    let square = event.target;
    square.style.backgroundColor = "black";
}

function generate(){
    container.innerHTML = "";

    let input = prompt("Please enter a side value (limit: 100):");

    while (input > 100){
        let input = prompt("Please enter another side value (limit: 100):");
    }

    for(let i = 1; i <= input * input; i++){
        let square = document.createElement("div");
        square.classList.add("square");
    
        let percent = 100/(input);
        square.setAttribute("style", `height: ${percent}%; width: ${percent}%; outline:solid;`);   
    
        square.addEventListener("mouseover", changeBlack);
        container.appendChild(square);
    }
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", generate);











