import { pawnMovement, rookMovement, queenMovement, bishopMovement, kingMovement, knightMovement } from './pieces.js'
import { checkForCheckB, checkForCheckW, checkForCheckMateB, checkForCheckMateW } from './check.js'

window.onload = () =>{
    setBoard();
    setPieces();
}

function setBoard(){
    let chessboard = document.getElementById("chessboard");
    while(chessboard.childElementCount > 0){
        console.log(chessboard.lastChild);
        chessboard.removeChild(chessboard.lastChild);
    }
    let bPieceNames = ["Brook", "Bknight", "Bbishop", "Bqueen", "Bking", "Bbishop", "Bknight", "Brook"];
    let wPieceNames = ["Wrook", "Wknight", "Wbishop", "Wqueen", "Wking", "Wbishop", "Wknight", "Wrook"];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            let chessSquare = document.createElement("div");
            chessSquare.id = i+","+j;
            chessSquare.addEventListener("drop", drop);
            chessSquare.addEventListener("dragover", allowDrop);
            if ((i + j) % 2 == 0) {
                chessSquare.className = "box brown-square";
            } else {
                chessSquare.className = "box tan-square box";
            }
            if(i == 0){
                chessSquare.title = bPieceNames[j];
            } else if(i == 1){
                chessSquare.title = "Bpawn";
            } else if(i == 7){
                chessSquare.title = wPieceNames[j];
            } else if(i == 6){
                chessSquare.title = "Wpawn";
            }
            chessboard.appendChild(chessSquare);
        }
    }
}

function coloring() {
    const color = document.querySelectorAll('.box')
    color.forEach(color => {
        let a = parseInt(color.id[0]) + parseInt(color.id[2])
        if(a % 2 == 0) {
            color.className = "box brown-square box";
        } else {
            color.className = "box tan-square box";
        }
    })
}

function changeTurn(){
    let turn = document.getElementById("tog").innerText;
    if(turn != "Black's Turn"){
        document.getElementById("tog").innerText = "Black's Turn";
    } else {
        document.getElementById("tog").innerText = "White's Turn";
    }
}

function setPieces() {
    document.querySelectorAll(".box").forEach((image, i) => {
        if (image.title.length !== 0) {
            let div = document.getElementById(image.id);
            let img = document.createElement("img");
            let p = document.createElement("p");
            p.id = image.title[0]
            img.id = image.title + "_" + image.id;
            img.src = image.title + ".png";
            img.alt = "";
            img.draggable = false;
            img.appendChild(p);
            img.ondragstart = drag;
            img.onmouseover = onclick;
            img.ondragend = coloring;
            img.addEventListener("drop", dropPiece);
            img.addEventListener("dragover", allowDropPiece);
            if (image.title == "Wpawn" || image.title == "Bpawn") {
                img.className = "allimg allpawn";
                div.appendChild(img);
            } else {
                img.className = "allimg";
                div.appendChild(img);
            }        
        }
    })
}

function onclick(ev){
    let turn = document.getElementById("tog").innerText;
    if(ev.target.id[0] === "B" && turn == "Black's Turn"){
        ev.target.draggable = true
    } else if(ev.target.id[0] === "W" && turn == "White's Turn") {
        ev.target.draggable = true
    }
}


function drag(ev) {
    console.log(ev.target)
    ev.dataTransfer.setData("text", ev.target.id);
    if(ev.target.id.includes('pawn')){
        pawnMovement(ev.target)
    } else if(ev.target.id.includes('rook')){
        rookMovement(ev.target)
    } else if(ev.target.id.includes('queen')){
        queenMovement(ev.target)
    } else if(ev.target.id.includes('bishop')){
        bishopMovement(ev.target)
    } else if(ev.target.id.includes('king')){
        kingMovement(ev.target)
    } else if(ev.target.id.includes('knight')){
        knightMovement(ev.target)
    }
}

function drop(ev) {
    let data = ev.dataTransfer.getData("text")
    let img = document.getElementById(data)
    if (ev.target.childElementCount == 0 && ev.target.className.includes("next-square")) {
        ev.preventDefault();
        ev.target.appendChild(img);
        img.draggable = false
        changeTurn()
        check()
    }
}

function allowDrop(ev) {
    if (ev.target.childElementCount == 0 && ev.target.className.includes("next-square")) {
        ev.preventDefault();
    }
}

function allowDropPiece(ev) {
    if (ev.target.parentNode.className.includes("next-square")) {
        ev.preventDefault();
    }
}

function dropPiece(ev) {
    let data = ev.dataTransfer.getData("text")
    let img = document.getElementById(data)
    let parent = ev.target.parentNode
    console.log(ev.target.parentNode.id)
    if (ev.target.id[0] != img.id[0] && parent.className.includes("next-square") && !ev.target.id.includes('king')) {
        ev.preventDefault();
        parent.removeChild(parent.childNodes[0])
        parent.appendChild(img);
        img.draggable = false
        changeTurn()
        check()
    }
}

function check(){
    let bKing = document.getElementById("Bking_0,4")
    let wKing = document.getElementById("Wking_7,4")
    let bKingChecked = checkForCheckB(bKing)
    let wKingChecked = checkForCheckW(wKing)
    let playAgain = false;
    if(bKingChecked){
        document.getElementById("check").innerText = "Black King is in Check"
        // if(checkForCheckMateB(bKing)){
        //     document.getElementById("check").innerText = "Black King is in Checkmate"
        //     playAgain = confirm("White Wins!\nPlay Again?")
        //     if(playAgain){
        //         window.location.reload()
        //     } else {
        //         window.location.href = '/home.html'
        //     }  
        // }
    } else if(wKingChecked){
        document.getElementById("check").innerText = "White King is in Check"
        // if(checkForCheckMateW(wKing)){
        //     document.getElementById("check").innerText = "White King is in Checkmate"
        //     playAgain = confirm("Black Wins!\nPlay Again?")
        //     if(playAgain){
        //         window.location.reload()
        //     } else {
        //         window.location.href = '/home.html'
        //     }            
        // }
    } else {
        document.getElementById("check").innerText = ""
    }
    coloring()
}
