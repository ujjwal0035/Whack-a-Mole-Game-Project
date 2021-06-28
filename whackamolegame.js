let flag=false;
function startClickHandlar(){
    if(flag===false){
        startTheGame();
        // setTimeout('startTheGame()',1000);
    }
    flag=true;
    
}
function startTheGame(){
    let time=11;

        setInterval(()=>{
            time--;
            if(time<0){
                return;
            }
            whack();
            document.getElementById("time-left").innerHTML=`${time} Sec`
        },1000); 
}

function whack(){
    let random=Math.floor(Math.random() * 9);
    let moleShoble =document.getElementById(random);
    let showMole=document.createElement("img");
    showMole.setAttribute("id","img");
    showMole.setAttribute("src","./whack-a-mole.png");
    moleShoble.appendChild(showMole);
    moleShoble.className +=" mole";
    setTimeout(()=>{
        let clearMole=document.getElementById(random);
        clearMole.removeChild(showMole);
        //  clearMole.classList.remove('mole');
         moleShoble.className ="square";
    },1000);
}
let Score=0;
function moleClickHandlar(data){
    let checkData=document.getElementById(data);
    if(checkData.className==="square mole" || checkData.className==="square  mole"){
        Score++;
        document.getElementById("score").innerHTML=Score;

    }
}

