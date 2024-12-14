//seq arrays for storing user seq and game seq
let userSeq =[];
let gameSeq =[];

let currentState = document.querySelector("#status");
let start = false;//it will check that we have started the game or not
let level= 0,idx=0,highest =0;
let highestScore=document.querySelector("#high");
//check color entered by user is correct or not and perform next ahead
function check(btn){
    if(btn == gameSeq[idx]) userSeq.push(btn),idx++;
    else if(idx <level){
        start = false;
        currentState.innerHTML=`GAME OVER! Your scrore was ${level}.<br> Press any key to restart`;
        gameSeq=[];
        userSeq=[];
        start= false;
        highest=Math.max(highest,level);
        highestScore.innerText=`Highest Score-${highest}`;
        level =0;
        
    }
    if(level && idx == level){
        setTimeout(function(){//give some delay so that user can see it if he pressed the same key
            gameShine(btns[Math.floor(Math.random()*4)])
        },1000);
    }
}
//gameshine the light
function gameShine(btn){
    level++;
    gameSeq.push(btn);
    idx=0;
    currentState.innerText=`Level-${level}`;
    let color = btn.style.backgroundColor;
    btn.style.backgroundColor="white";
    setTimeout(function(){btn.style.backgroundColor=`${color}`},250);
}

//shine light when user enter any color
function userShine(btn){
    
    let color = btn.style.backgroundColor;
    btn.style.backgroundColor="green";
    setTimeout(function(){btn.style.backgroundColor=`${color}`},250);
    check(btn);
}

let btns = [document.querySelector("#box1"),document.querySelector("#box2"),document.querySelector("#box3"),document.querySelector("#box4")];
let body=document.querySelector("body");

//starting Game
body.addEventListener("keypress",function(){
    if(start== false){
        start = true;
        gameShine(btns[Math.floor(Math.random()*4)]);
    }
});

//add event listener on each button (box) so that when user click on that color btn
for(btn of btns){
    btn.addEventListener("click",function(){
        if(start==true) userShine(this);
    });
}




