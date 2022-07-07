let xo =["x", "o"]; 
let cp = xo[Math.round(Math.random())];
let box;
let run = "go";
let txt = document.querySelector("p");
let btn = document.querySelector("#button");
let game = document.querySelector("#game_area");
let options = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
];
let user = ["","","","","","","","",""];
function start(){ 
    box = event.target;
    if(run == "go"){
        update(box.id);
        check();
    }
    else return;
}
function update(index){
    if(user[index] == ""){
        box.innerHTML = cp;
        user[index] = cp;
        if( cp == "x"){
            cp = "o";
            box.style.color = "red";
            txt.innerHTML = "O's turn";
        }
        else{
            cp = "x";
            box.style.color = "blue"
            txt.innerHTML = "X's turn";
        }
    }
    else return;
}
function check(){
    for(let i = 0; i < options.length; i++){
        let opt = options[i];
        let x = user[opt[0]];
        let y = user[opt[1]];
        let z = user[opt[2]];
        if( x == "" || y == "" || z == "" ){
            continue;
        }
        else if( x === y && y === z ){
            end(x);
            break;
        }
        else if(!user.includes("")){
            end("yes");
            break;
        }
        else continue;
    }   
}

function end(x){
    btn.style.visibility = "visible";
    run = "stop";
    if (x=="yes") txt.innerHTML = "Game DRAW";
    if (x=="x"){
        txt.innerHTML = "Player X WON!!";
        red();
    }
    if(x=="o"){
        txt.innerHTML = "Player O WON!!";
        blue();
    }
}

function red(){
    setTimeout(function(){
        game.style.backgroundColor="red";
        setTimeout(function(){
                game.style.backgroundColor="cornsilk";
        },600);
    },200);
}
function blue(){
    setTimeout(function(){
        game.style.backgroundColor="blue";
        setTimeout(function(){
                game.style.backgroundColor="cornsilk";
        },600);
    },200);
}

function reset(){
    txt.innerHTML = "X's turn";
    user = ["","","","","","","","",""];
    cp = "x";
    run = "go";
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(
        (item) => item.textContent = ""
    );
    btn.style.visibility = "hidden";
}