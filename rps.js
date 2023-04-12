rockbtn=document.querySelector("#rk")
paperbtn=document.querySelector("#ppr")
scissorbtn=document.querySelector("#scr")
dispGamRes=document.querySelector(".gameresult")
dispBotRes=document.querySelector(".botresult")
playerScoreCounter=document.querySelector("#playerScoreCount")
botScoreCounter=document.querySelector("#botScoreCount")
resetgamebtn=document.querySelector(".resetbtn")
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
function botChoice(){
    switch(finalbotval)
    {
        case 1 : botChoiceValue ="Rock"
                break;
        case 2 : botChoiceValue ="Paper"
                break
        case 3 : botChoiceValue ="Scissors"
                break
        default: none;
    }
    console.log(botChoiceValue);
    dispBotRes.innerHTML="Bot chose "+botChoiceValue;
}
function playerPoint(){
    dispGamRes.innerHTML="You Win!";
    playerScoreIncrement++;
    playerScoreCounter.innerHTML = playerScoreIncrement;
    botChoice()
}
function botPoint(){
    dispGamRes.innerHTML="You Lost";
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
        dispBotRes.innerHTML="Bot chose the same!";
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