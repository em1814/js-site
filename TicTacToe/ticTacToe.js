var turns = 0;
window.onload = (event) =>{
    setBoard();
}

function setBoard() {
    let board = document.getElementById("board");
    for (let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            let square = document.createElement("div");
            square.className = "square"+'_'+i+j;
            square.id =  i+ ',' + j;
            square.onclick = onclick;
            board.appendChild(square);
            console.log(square, board)
        }
    }
}

function reset() {
    turns = 0;
    let turn = document.getElementById("turn");
    let element = document.getElementById("reset");
    element.setAttribute("hidden", true);
    turn.innerHTML = "X Turn";
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++){
            let id = i + "," + j;
            let square = document.getElementById(id);
            square.innerHTML = "";
            square.title = "";
            square.disabled = false;
        }
    }
}

function onclick(event){
    let square = document.getElementById(event.target.id);
    let turn = document.getElementById("turn");
    let img = document.createElement("img");
    img.src = turn.innerHTML[0]+".png";
    img.className = "allimg";
    if(turn.innerHTML[0] == "X") {
        square.appendChild(img);
        square.title = "X";
        square.disabled = true;
        turn.innerHTML = "O Turn";
    } else {
        square.appendChild(img);
        square.title = "O";
        square.disabled = true;
        turn.innerHTML = "X Turn";
    }
    checkWin(square);
}

function checkWin(square) {
    let turn = document.getElementById("turn");
    let reset = document.getElementById("reset");
    for(let i = 0; i < 3; i++) {
        let one = document.getElementById("0,"+i);
        let two = document.getElementById("1,"+i);
        let three = document.getElementById("2,"+i);
        if(square.title == one.title && square.title == two.title && square.title == three.title ) {
            turn.innerHTML = square.title+" Win!";
            reset.removeAttribute("hidden");
        }
    }
    for(let i = 0; i < 3; i++) {
        let one = document.getElementById(i+",0");
        let two = document.getElementById(i+",1");
        let three = document.getElementById(i+",2");
        if(square.title == one.title && square.title == two.title && square.title == three.title ) {
            turn.innerHTML = square.title+" Win!";
            reset.removeAttribute("hidden");
        }
    } 
    let one = document.getElementById("0,0");
    let two = document.getElementById("1,1");
    let three = document.getElementById("2,2");
    if(square.title == one.title && square.title == two.title && square.title == three.title ) {
        turn.innerHTML = square.title+" Win!";
        reset.removeAttribute("hidden");
    }
    one = document.getElementById("0,2");
    two = document.getElementById("1,1");
    three = document.getElementById("2,0");
    if(square.title == one.title && square.title == two.title && square.title == three.title ) {
        turn.innerHTML = square.title+" Win!";
        reset.removeAttribute("hidden");
    }
    turns++;
    if(turns == 9) {
        turn.innerHTML = "Draw!";
        reset.removeAttribute("hidden");
    }
}
