export function checkPawnMovement(pawn) {
    let currentPawn = pawn.id.split("_");
    let location = pawn.parentNode.id.split(",")
    let next = '';
    document.getElementById(location[0]+','+location[1]).className = "box current-square"
    if(currentPawn[0][0] === 'W'){
        console.log
        next = parseInt(location[0])-1 + ',' + location[1]
        document.getElementById(next).className += "test-square"
        if(location[0] == 6 && document.getElementById(parseInt(location[0])-2 + ',' + location[1]).childElementCount == 0){
            document.getElementById(parseInt(location[0])-2 + ',' + location[1]).className += "test-square"
        }
        let y = parseInt(location[0])-1
        let x = parseInt(location[1])+1
        if(x >= 0 && x <= 7 && document.getElementById(y+','+x).childElementCount == 1 && document.getElementById(y+','+x).childNodes[0].id[0] != currentPawn[0][0]){
            document.getElementById(y+','+x).className += "test-square"
        }
        y = parseInt(location[0])-1
        x = parseInt(location[1])-1
        if(x >= 0 && x <= 7 && document.getElementById(y+','+x).childElementCount == 1 && document.getElementById(y+','+x).childNodes[0].id[0] != currentPawn[0][0]){
            document.getElementById(y+','+x).className += "test-square"
        }
    } else {
        next = parseInt(location[0])+1 + ',' + location[1]
        document.getElementById(next).className += "test-square"
        if(location[0] == 1 && document.getElementById(parseInt(location[0])+2 + ',' + location[1]).childElementCount == 0){
            document.getElementById(parseInt(location[0])+2 + ',' + location[1]).className += "test-square"
        }
        let y = parseInt(location[0])+1
        let x = parseInt(location[1])+1
        if(x >= 0 && x <= 7 && document.getElementById(y+','+x).childElementCount == 1 && document.getElementById(y+','+x).childNodes[0].id[0] != currentPawn[0][0]){
            document.getElementById(y+','+x).className += "test-square"
        }
        y = parseInt(location[0])+1
        x = parseInt(location[1])-1
        if(x >= 0 && x <= 7 && document.getElementById(y+','+x).childElementCount == 1 && document.getElementById(y+','+x).childNodes[0].id[0] != currentPawn[0][0]){
            document.getElementById(y+','+x).className += "test-square"
        }
    }
}

export function checkRookMovement(rook) {
    let currentRook = rook.id.split("_");
    let location = rook.parentNode.id.split(",");
    document.getElementById(location[0] + ',' + location[1]).className = "box current-square";
    let go = true;
    let up = true;
    let down = true;
    let left = true;
    let right = true;
    let x = 1;
    let box = '';
    let i = 0;
    while(go) {
        box = parseInt(location[0])+x + ',' + location[1];
        if(box.split(",")[0] <= 7 && box.split(",")[0] >= 0 && up){
            if(document.getElementById(box).childElementCount == 0){
                document.getElementById(box).className += "test-square";
            } else if(document.getElementById(box).childNodes[0].id[0] != currentRook[0][0]) {
                document.getElementById(box).className += "test-square"
                up = false
            } else if(document.getElementById(box).childNodes[0].id[0] == currentRook[0][0]) {
                up = false
            }
        } else {
            up = false
        }
        box = parseInt(location[0])-x + ',' + location[1]
        if(box.split(",")[0] <= 7 && box.split(",")[0] >= 0 && down){
            if(document.getElementById(box).childElementCount == 0){
                document.getElementById(box).className += "test-square"
            } else if(document.getElementById(box).childNodes[0].id[0] != currentRook[0][0]) {
                document.getElementById(box).className += "test-square"
                down = false
            } else if(document.getElementById(box).childNodes[0].id[0] == currentRook[0][0]) {
                down = false
            }
        } else {
            down = false
        }
        i = parseInt(location[1])+x
        box = location[0] + ',' + i
        if(box.split(",")[1] <= 7 && box.split(",")[1] >= 0 && right){
            if(document.getElementById(box).childElementCount == 0){
                document.getElementById(box).className += "test-square"
            } else if(document.getElementById(box).childNodes[0].id[0] != currentRook[0][0]) {
                document.getElementById(box).className += "test-square"
                right = false
            } else if(document.getElementById(box).childNodes[0].id[0] == currentRook[0][0]) {
                right = false
            }
        } else {
            right = false
        }
        i = parseInt(location[1])+x
        box = location[0] + ',' + i
        if(box.split(",")[1] <= 7 && box.split(",")[1] >= 0 && left){
            if(document.getElementById(box).childElementCount == 0){
                document.getElementById(box).className += "test-square"
            } else if(document.getElementById(box).childNodes[0].id[0] != currentRook[0][0]) {
                document.getElementById(box).className += "test-square"
                left = false
            } else if(document.getElementById(box).childNodes[0].id[0] == currentRook[0][0]) {
                left = false 
            }
        } else {
            left = false
        }
        if(down == false && up == false && left == false && right == false){
            go = false
        }
        x++
    }
}

export function checkBishopMovement(bishop) {
    let location = bishop.parentNode.id.split(",")
    let currentBishop = bishop.id.split(",")
    document.getElementById(location[0] + ',' + location[1]).className = "box current-square"
    let box = ''
    let downLeft = true
    let downRight = true
    let upLeft = true
    let upRight = true
    for(let i = 1; i < 9; i++){
        let x = parseInt(location[0])-i
        let y = parseInt(location[1])-i
        box = x + ',' + y
        if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && downLeft){
            if (document.getElementById(box).childElementCount == 0){
                document.getElementById(box).className += "test-square"
            } else if(document.getElementById(box).childNodes[0].id[0] == currentBishop[0][0]) {
                downLeft = false
            } else if(document.getElementById(box).childNodes[0].id[0] != currentBishop[0][0]){
                document.getElementById(box).className += "test-square"
                downLeft = false
            }
        }
        x = parseInt(location[0])+i
        y = parseInt(location[1])-i
        box = x + ',' + y
        if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && downRight){
            if (document.getElementById(box).childElementCount == 0){
                document.getElementById(box).className += "test-square"
            } else if(document.getElementById(box).childNodes[0].id[0] == currentBishop[0][0]) {
                downRight = false
            } else if(document.getElementById(box).childNodes[0].id[0] != currentBishop[0][0]){
                document.getElementById(box).className += "test-square"
                downRight = false
            }
        }
        x = parseInt(location[0])-i
        y = parseInt(location[1])+i
        box = x + ',' + y
        if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && upLeft){
            if (document.getElementById(box).childElementCount == 0){
                document.getElementById(box).className += "test-square"
            } else if(document.getElementById(box).childNodes[0].id[0] == currentBishop[0][0]) {
                upLeft = false
            } else if(document.getElementById(box).childNodes[0].id[0] != currentBishop[0][0]){
                document.getElementById(box).className += "test-square"
                upLeft = false
            }
        }
        x = parseInt(location[0])+i
        y = parseInt(location[1])+i
        box = x + ',' + y
        if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && upRight){
            if (document.getElementById(box).childElementCount == 0){
                document.getElementById(box).className += "test-square"
            } else if(document.getElementById(box).childNodes[0].id[0] == currentBishop[0][0]) {
                upRight = false
            } else if(document.getElementById(box).childNodes[0].id[0] != currentBishop[0][0]){
                document.getElementById(box).className += "test-square"
                upRight = false
            }
        }
    }
}

export function checkKingMovement(king) {
    let location = king.parentNode.id.split(",")
    document.getElementById(location[0] + ',' + location[1]).className = "box current-square"
    let box = ''
    for(let i = -1; i < 2; i++){
        for(let j = -1; j < 2; j++){
            let x = parseInt(location[0])+i
            let y = parseInt(location[1])+j
            box = x + ',' + y
            if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && (document.getElementById(box).childElementCount == 0 || document.getElementById(box).childNodes[0].id[0] != king.id[0])){
                document.getElementById(box).className += "test-square"
            }
        }
    }
}

export function checkKnightMovement(knight) {
    let location = knight.parentNode.id.split(",");
    document.getElementById(location[0] + ',' + location[1]).className = "box current-square";
    let box = '';
    let x = parseInt(location[0])+2;
    let y = parseInt(location[1])+1;
    box = x + ',' + y;
    if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && (document.getElementById(box).childElementCount == 0 || document.getElementById(box).childNodes[0].id[0] != knight.id[0])){
        document.getElementById(box).className += "test-square "; 
    }
    x = parseInt(location[0])+2
    y = parseInt(location[1])-1
    box = x + ',' + y
    if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && (document.getElementById(box).childElementCount == 0 || document.getElementById(box).childNodes[0].id[0] != knight.id[0])){
        document.getElementById(box).className += "test-square"
    }
    x = parseInt(location[0])-1
    y = parseInt(location[1])+2
    box = x + ',' + y
    if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && (document.getElementById(box).childElementCount == 0 || document.getElementById(box).childNodes[0].id[0] != knight.id[0])){
        document.getElementById(box).className += "test-square"
    }
    x = parseInt(location[0])+1
    y = parseInt(location[1])+2
    box = x + ',' + y
    if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && (document.getElementById(box).childElementCount == 0 || document.getElementById(box).childNodes[0].id[0] != knight.id[0])){
        document.getElementById(box).className += "test-square"
    }
    x = parseInt(location[0])+1
    y = parseInt(location[1])-2
    box = x + ',' + y
    if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && (document.getElementById(box).childElementCount == 0 || document.getElementById(box).childNodes[0].id[0] != knight.id[0])){
        document.getElementById(box).className += "test-square"
    }
    x = parseInt(location[0])-1
    y = parseInt(location[1])-2
    box = x + ',' + y
    if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && (document.getElementById(box).childElementCount == 0 || document.getElementById(box).childNodes[0].id[0] != knight.id[0])){
        document.getElementById(box).className += "test-square"
    }
    x = parseInt(location[0])-2
    y = parseInt(location[1])+1
    box = x + ',' + y
    if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && (document.getElementById(box).childElementCount == 0 || document.getElementById(box).childNodes[0].id[0] != knight.id[0])){
        document.getElementById(box).className += "test-square"
    }
    x = parseInt(location[0])-2
    y = parseInt(location[1])-1
    box = x + ',' + y
    if(box != location[0] + ',' + location[1] && x >= 0 && y >= 0 && x < 8 && y < 8 && (document.getElementById(box).childElementCount == 0 || document.getElementById(box).childNodes[0].id[0] != knight.id[0])){
        document.getElementById(box).className += "test-square"
    }
}

export function checkForCheckB(bKing) {
    console.log('check for check')
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            let box = document.getElementById(i + ',' + j)
            if(box.childElementCount != 0 && box.childNodes[0].id[0] != bKing.id[0]){
                let piece = box.childNodes[0]
                if(piece.id.includes('pawn')){
                    console.log('pawn')
                    checkPawnMovement(piece)
                } else if(piece.id.includes('rook')){
                    console.log('rook')
                    checkRookMovement(piece)
                } else if(piece.id.includes('bishop')){
                    checkBishopMovement(piece)
                } else if(piece.id.includes('queen')){
                    checkRookMovement(piece)
                    checkBishopMovement(piece)
                } else if(piece.id.includes('king')){
                    checkKingMovement(piece)
                } else if(piece.id.includes('knight')){
                    checkKnightMovement(piece)
                }
            }
        }
    }
    if(document.getElementById(bKing.parentNode.id).className.includes('test-square')){
        document.getElementById(bKing.parentNode.id).className = document.getElementById(bKing.parentNode.id).className.replace('test-square', '')
        return true
    } else {
        return false
    }
}

export function checkForCheckW(wKing) {
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            let box = document.getElementById(i + ',' + j)
            if(box.childElementCount != 0 && box.childNodes[0].id[0] != wKing.id[0]){
                let piece = box.childNodes[0]
                if(piece.id[1] == 'p'){
                    checkPawnMovement(piece)
                } else if(piece.id[1] == 'r'){
                    checkRookMovement(piece)
                } else if(piece.id[1] == 'b'){
                    checkBishopMovement(piece)
                } else if(piece.id[1] == 'q'){
                    checkRookMovement(piece)
                    checkBishopMovement(piece)
                } else if(piece.id[1] == 'k'){
                    checkKingMovement(piece)
                } else if(piece.id[1] == 'n'){
                    checkKnightMovement(piece)
                }
            }
        }
    }
    if(document.getElementById(wKing.parentNode.id).className.includes('test-square')){
        document.getElementById(wKing.parentNode.id).className = document.getElementById(wKing.parentNode.id).className.replace('test-square', '')
        return true
    } else {
        return false
    }
}

export function checkForCheckMateW(wKing) {
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            let box = document.getElementById(i + ',' + j)
            if(box.childElementCount != 0 && box.childNodes[0].id[0] != wKing.id[0]){
                let piece = box.childNodes[0]
                if(piece.id[1] == 'p'){
                    checkPawnMovement(piece)
                } else if(piece.id[1] == 'r'){
                    checkRookMovement(piece)
                } else if(piece.id[1] == 'b'){
                    checkBishopMovement(piece)
                } else if(piece.id[1] == 'q'){
                    checkRookMovement(piece)
                    checkBishopMovement(piece)
                } else if(piece.id[1] == 'k'){
                    checkKingMovement(piece)
                } else if(piece.id[1] == 'n'){
                    checkKnightMovement(piece)
                }
            }
        }
    }
    wKing = wKing.id.split('_')
    wKing = wKing[1].split(',')
    let x = parseInt(wKing[0])
    let y = parseInt(wKing[1])
    let check = true
    if(x+1 < 8 && y+1 < 8 && x+1 > 0 && y+1 > 0){
        let box = document.getElementById((x+1) + ',' + (y+1))
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x+1 < 8 && y-1 < 8 && x+1 > 0 && y-1 > 0){
        let box = document.getElementById((x+1) + ',' + (y-1))
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x-1 < 8 && y+1 < 8 && x-1 > 0 && y+1 > 0){
        let box = document.getElementById((x-1) + ',' + (y+1))
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x-1 < 8 && y-1 < 8 && x-1 > 0 && y-1 > 0){
        let box = document.getElementById((x-1) + ',' + (y-1))
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x+1 < 8 && y < 8 && x+1 > 0 && y > 0){
        let box = document.getElementById((x+1) + ',' + y)
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x-1 < 8 && y < 8 && x-1 > 0 && y > 0){
        let box = document.getElementById((x-1) + ',' + y)
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x < 8 && y+1 < 8 && x > 0 && y+1 > 0){
        let box = document.getElementById(x + ',' + (y+1))
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x < 8 && y-1 < 8 && x > 0 && y-1 > 0){
        let box = document.getElementById(x + ',' + (y-1))
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    return check
}

export function checkForCheckMateB(bKing) {
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 8; j++){
            let box = document.getElementById(i + ',' + j)
            if(box.childElementCount != 0 && box.childNodes[0].id[0] != bKing.id[0]){
                let piece = box.childNodes[0]
                if(piece.id[1] == 'p'){
                    checkPawnMovement(piece)
                } else if(piece.id[1] == 'r'){
                    checkRookMovement(piece)
                } else if(piece.id[1] == 'b'){
                    checkBishopMovement(piece)
                } else if(piece.id[1] == 'q'){
                    checkRookMovement(piece)
                    checkBishopMovement(piece)
                } else if(piece.id[1] == 'k'){
                    checkKingMovement(piece)
                } else if(piece.id[1] == 'n'){
                    checkKnightMovement(piece)
                }
            }
        }
    }
    bKing = bKing.id.split('_')
    bKing = bKing[1].split(',')
    let x = parseInt(bKing[0])
    let y = parseInt(bKing[1])
    let check = true
    if(x+1 < 8 && y+1 < 8 && x+1 > 0 && y+1 > 0){
        let box = document.getElementById((x+1) + ',' + (y+1))
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x+1 < 8 && y-1 < 8 && x+1 > 0 && y-1 > 0){
        let box = document.getElementById((x+1) + ',' + (y-1))
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x-1 < 8 && y+1 < 8 && x-1 > 0 && y+1 > 0){
        let box = document.getElementById((x-1) + ',' + (y+1))
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x-1 < 8 && y-1 < 8 && x-1 > 0 && y-1 > 0){
        let box = document.getElementById((x-1) + ',' + (y-1))
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x+1 < 8 && y < 8 && x+1 > 0 && y > 0){
        let box = document.getElementById((x+1) + ',' + y)
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x-1 < 8 && y < 8 && x-1 > 0 && y > 0){
        let box = document.getElementById((x-1) + ',' + y)
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x < 8 && y+1 < 8 && x > 0 && y+1 > 0){
        let box = document.getElementById(x + ',' + (y+1))
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    if(x < 8 && y-1 < 8 && x > 0 && y-1 > 0){
        let box = document.getElementById(x + ',' + (y-1))
        if(!box.className.includes('test-square') && box.childElementCount == 0){
            check = false
        }
    }
    return check
}