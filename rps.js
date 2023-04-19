rockbtn=document.querySelector("#rk")
paperbtn=document.querySelector("#ppr")
scissorbtn=document.querySelector("#scr")
dispGamRes=document.querySelector(".gameresult")
dispBotRes=document.querySelector(".botresult")
playerScoreCounter=document.querySelector("#playerScoreCount")
botScoreCounter=document.querySelector("#botScoreCount")
resetgamebtn=document.querySelector(".resetbtn")
handicon=document.querySelector(".handicon")
icon = document.createElement("i");

//event space
rockbtn.addEventListener("click",rockclick);
paperbtn.addEventListener("click",paperclick);
scissorbtn.addEventListener("click",scissorclick);
resetgamebtn.addEventListener("click",resetFn)
let botChoiceValue;
let playerScoreIncrement = 0;
let botScoreIncrement = 0;
let gameval;
var finalbotval;
function rockclick(){
    gameval=1
    finalbotval = botvalgen();
    gamelogic();
}
function paperclick() {
    gameval=2
    finalbotval = botvalgen();
    gamelogic()
}
function scissorclick(){
    gameval=3
    finalbotval = botvalgen();
    gamelogic()
}
//random value generator from 1 to 3 
function botvalgen(){
    let botval;
    botval= Math.floor(Math.random()*3)+1;
    console.log(botval)
    return botval
}
let botIconValue;
function addicon(){ 
    icon.setAttribute("class", botIconValue);
    handicon.appendChild(icon);
}
function botChoice(){
    switch(finalbotval)
    {
        case 1: botChoiceValue ="Rock"
                botIconValue="fa-regular fa-hand-back-fist"
                addicon()
                break;
        case 2: botChoiceValue ="Paper"
                botIconValue="fa-regular fa-hand"
                addicon()
                break
        case 3: botChoiceValue ="Scissors"
                botIconValue="fa-regular fa-hand-scissors"
                addicon()
                break
        default: none;
    }
    if(finalbotval==gameval){
        dispBotRes.innerHTML="Bot chose the same!";
    }else{
    dispBotRes.innerHTML="Bot chose "+botChoiceValue;
    }
}
function playerPoint(){
    dispGamRes.innerHTML="You Win!";
    dispGamRes.style.borderColor = 'green';
    dispGamRes.style.backgroundColor = '#7dfa61';
    playerScoreIncrement++;
    playerScoreCounter.innerHTML = playerScoreIncrement;
    botChoice()
   
}
function botPoint(){
    dispGamRes.innerHTML="You Lost";
    dispGamRes.style.borderColor = 'red';
    dispGamRes.style.backgroundColor = '#f9604c';
    botScoreIncrement++;
    botScoreCounter.innerHTML= botScoreIncrement;
    botChoice()
}
function gamelogic(){ 
    if(gameval==1)
    {
        if(finalbotval==2)
        {   
            botPoint();
        }
        else if(finalbotval==3){
            playerPoint();
        }
    }
    if(gameval==2)
    {
        if(finalbotval==1)
        {
            playerPoint();
        }
        else if(finalbotval==3){
            botPoint();
        }
    }
    if(gameval==3)
    {
        if(finalbotval==2)
        {
            playerPoint();
        }
        else if(finalbotval==1){
            botPoint();
        }
    }
    if(gameval==finalbotval)
    {
        dispGamRes.innerHTML="It's a Tie";
        dispGamRes.style.borderColor = 'yellow';
        dispGamRes.style.backgroundColor = '#e8e853';
        botChoice()
    }
    
    if(playerScoreIncrement>botScoreIncrement)
    {
        playerScoreCounter.style.backgroundColor = '#7dfa61';
        botScoreCounter.style.backgroundColor = '#fa543e';
    }else
    {
        playerScoreCounter.style.backgroundColor = '#fa543e';
        botScoreCounter.style.backgroundColor = '#7dfa61';
    }
    if(playerScoreIncrement==botScoreIncrement)
    {
        playerScoreCounter.style.backgroundColor = 'yellow';
        botScoreCounter.style.backgroundColor = 'yellow';
    }
}
function resetFn(){
    playerScoreIncrement = 0;
    botScoreIncrement = 0;
    playerScoreCounter.innerHTML = 0;
    botScoreCounter.innerHTML = 0;
    playerScoreCounter.style.backgroundColor = '#ffffff00';
    botScoreCounter.style.backgroundColor = '#ffffff00';
    dispGamRes.innerHTML="PLAY";
    dispBotRes.innerHTML="Bot is sleeping..."
}

    
    
    
