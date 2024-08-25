let gameseq=[];
let userseq=[];
let highscore=0;
let colors=["yellow","red","purple","green"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",startgame)

function startgame(){
    console.log("Game is started");
    started=true;
    levelup();
}

function levelup(){
   userseq=[];
    level++;
    h2.innerHTML=`Level : ${level}`;
    let randomIdx=Math.floor(Math.random()*3);
    // console.log(randomIdx);
    let randomColorSelectedByGame=colors[randomIdx];
    // console.log(randomColorSelectedByGame);
    gameseq.push(randomColorSelectedByGame);
    console.log("Game sequence is: "+gameseq);
    let randombuttontoflash=document.querySelector(`.${randomColorSelectedByGame}`);
    // console.log(randombuttontoflash);
    gameFlash(randombuttontoflash);
}
function gameFlash(btn){
    btn.classList.add("flash");

setTimeout(() => {
    btn.classList.remove("flash");
}, 500);   
}

let btns=document.querySelectorAll(".btn");

for(btn of btns){
    btn.addEventListener("click",btnPress)
}

function btnPress(){
    // console.log(this);// show the refrence to the current buttton 
    let btn=this;

    let usercolor=btn.getAttribute("id");  // we have given id as colors of the button
    userseq.push(usercolor);
    // console.log("User sequence: "+userseq);
    userFlash(btn);
     checkans(userseq.length-1);
}
function checkans(idx){
    if (userseq[idx]==gameseq[idx]){
        console.log(`correct Enter remaining ${gameseq.length-userseq.length}`);
        if (userseq.length==gameseq.length) {
              setTimeout(levelup,1000)
        }
    }
    else{
        h2.innerHTML=`Game over Your score is ${level}, press any key to start the game`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="white";
        }, 500);
        reset();
    }
}

function reset(){
    userseq=[];
    gameseq=[];
    level=0;
    // startgame();

}

function userFlash(btn){
    btn.classList.add("userflash");
setTimeout(() => {
    btn.classList.remove("userflash");
}, 500);   
}