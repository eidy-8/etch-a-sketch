function changeBlack(event){
    let square = event.target;
    square.style.backgroundColor = "black";
}

function rgb(event){
    
}

function erase(event){

}

function generate(){
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
    
        square.addEventListener("mouseover", changeBlack);
        container.appendChild(square);
    }
}

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", generate);

const btn2 = document.querySelector('#btn2');
btn2.addEventListener("click", rgb);

const btn3 = document.querySelector('#btn3');
btn3.addEventListener("click", erase);











