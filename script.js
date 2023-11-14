var timer=60;
var score=0;
var rn=0;

function increaseScore(){
   score +=10;
   document.querySelector("#scoreval").textContent=score;
}

function getNewHit(){
     rn =Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=rn;
}

function makeBubble(){
    var clutter="" ;

for(i=1;i<=133;i++){
    var rn=Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn }</div>`
}
document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimmer(){
    var timerint= setInterval(function(){
        if(timer>0){
            timer--;
            document.getElementById("timerval").innerText=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1>YOU SCORE = ${score}<h1>`
        }
       
    },1000)
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNumber=dets.target.textContent;
    if(clickedNumber == rn){
        increaseScore();
        makeBubble();
        getNewHit();

    }
})

runTimmer();
makeBubble();
getNewHit();

