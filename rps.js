rockbtn=document.querySelector("#rk")
paperbtn=document.querySelector("#ppr")
scissorbtn=document.querySelector("#scr")
dispGamRes=document.querySelector(".gameresult")
dispBotRes=document.querySelector(".botresult")
luckFact=document.querySelector(".luckFacts")
luckFactPara=document.querySelector(".luckFactsPara")
themeColor=document.querySelector(".themeColour")//useless
scoreSection=document.querySelector(".scoresection")//useless
navbar=document.querySelector(".navbar")//useless
body=document.querySelector("body")
playerScoreCounter=document.querySelector("#playerScoreCount")
botScoreCounter=document.querySelector("#botScoreCount")
resetgamebtn=document.querySelector(".resetbtn")
timer=document.querySelector(".timer")
copyFactsBtn=document.querySelector("#copyFacts")
handicon=document.querySelector(".handicon")
icon = document.createElement("i");

//event space
rockbtn.addEventListener("click",rockclick);
paperbtn.addEventListener("click",paperclick);
scissorbtn.addEventListener("click",scissorclick);
resetgamebtn.addEventListener("click",resetFn)
themeColor.addEventListener("click",changeTheme)
copyFactsBtn.addEventListener("click",copyTheFact)


let botChoiceValue;
let playerScoreIncrement = 0;
let botScoreIncrement = 0;
let gameval;
var finalbotval;
let botIconValue;
let themeColourIncrement = 0,themeColourIncrement2= 0;
let themeColours = ["#FFEECF","#FF9FE5","#FF858D","#00D9C0","#9A8873","#77BA99"];
let themeColours2 =["#FADCD9", "#FFB2D9", "#FFC9A9", "#B8E6D9", "#EAD6B3", "#C8E6C9"]
let themeColours3 =["#F5D5D2", "#FFA1CD", "#FFC09F", "#93D1CD", "#D8C790", "#B1D9C0"]


let luckFactArray = [
    "In Japan, the number 4 is considered unlucky because it is pronounced similarly to the word for death.",
    "In Chinese culture, the number 8 is considered lucky because it sounds like the word for wealth or fortune.",
    "The horseshoe is a symbol of good luck because it was traditionally made of iron, which was believed to ward off evil spirits.",
    "According to a study, people who believe in luck are more likely to notice and benefit from unexpected opportunities.",
    "The phrase 'break a leg' is a common way to wish someone good luck in the theatre world.",
    "In some cultures, it is considered lucky to wear a certain color, such as red or green.",
    "Finding a four-leaf clover is considered lucky because the chances of finding one are estimated to be 1 in 10,000.",
    "Some people believe that carrying a rabbit's foot or a lucky coin can bring good luck.",
    "In Western cultures, it is believed that seeing a shooting star is a sign of good luck.",
    "The lucky cat statue, or maneki-neko, is a popular symbol of good luck in Japanese and Chinese cultures.",
    "In Hinduism, elephants are considered lucky animals and are often used as symbols of good fortune.",
    "In some cultures, it is considered lucky to throw coins into a well or fountain.",
    "The Irish believe that finding a horseshoe brings good luck, but it must be pointing upwards to prevent the luck from running out.",
    "Some people believe that carrying a ladybug in your pocket can bring good luck.",
    "In Korean culture, the number 3 is considered lucky because it represents heaven, earth, and humanity.",
    "Gamblers may carry a lucky charm or perform a lucky ritual, such as blowing on dice or rubbing a rabbit's foot, to improve their chances of winning.",
    "Many cultures believe that Friday the 13th is an unlucky day, while others believe that it is a lucky day for taking risks and making bold decisions.",
    "In many cultures, it is believed that a black cat crossing your path is a sign of bad luck.",
    "In Ancient Egypt, the scarab beetle was considered a symbol of luck and rebirth.",
    "The expression 'knock on wood' is a superstitious way of preventing bad luck.",
    "In some cultures, it is considered lucky to have a bird poop on you, as it is believed to bring good fortune and wealth.",
    "In Chinese culture, the number 9 is considered lucky because it sounds similar to the word for longevity or eternity.",
    "Studies show that people who believe in luck are more likely to win at rock-paper-scissors.",
    "Some people believe that folding your arms into an X shape before playing rock-paper-scissors can bring good luck.",
    "In Japan, there is a version of rock-paper-scissors called 'jan-ken-pon' that is said to have originated from a hand game played by samurai warriors.",
    "Rock-paper-scissors is often used as a tiebreaker in competitive sports and tournaments.",
    "In South Korea, there is a televised rock-paper-scissors tournament with a cash prize of $50,000.",
    "The World RPS Society was founded in 1918 to promote the game of rock-paper-scissors.",
    "In some versions of rock-paper-scissors, players can use additional hand gestures or symbols, such as a lizard or Spock.",
    "In Chinese culture, rock-paper-scissors is sometimes used as a way to make decisions or settle disputes.",
    "The longest game of rock-paper-scissors on record lasted for 101 rounds.",
    "In some versions of rock-paper-scissors, players can shout a phrase or word along with their gesture, such as 'rock, paper, scissors, shoot!'",
    "In some cultures, it is believed that if you walk under a ladder, you will have bad luck.",
    "Breaking a mirror is considered to be bad luck and is said to bring seven years of bad luck.",
    "Many people believe that knocking on wood brings good luck. This superstition dates back to ancient times when people believed that spirits lived in trees, and knocking on wood was a way to ask for their protection.",
    "Some people believe that if you see a shooting star and make a wish, it will come true.",
    "In Chinese culture, the number eight is considered lucky because it sounds similar to the word for wealth and prosperity.",
    "It is believed that horseshoes bring good luck, and that hanging a horseshoe over a door can protect a household from evil spirits.",
    "Some people believe that crossing your fingers brings good luck, and that it originated from early Christianity, where people would cross their fingers to ward off evil.",
    "Black cats are often considered to be unlucky, but in some cultures, such as Japan, they are believed to bring good luck.",
    "In many cultures, it is believed that finding a penny on the ground brings good luck.",
    "It is believed that blowing out all the candles on your birthday cake in one breath will bring good luck and make your wish come true.",
    "This variation of rock-paper-scissors was first introduced in the TV show 'The Big Bang Theory'.",
    "The game  rock-paper-scissors was created by Sam Kass and Karen Bryla.",
    "The five options in this game are inspired by characters and objects from the TV show 'Star Trek'.",
    "The lizard and spock options were added to make the game more complex and reduce the likelihood of ties.",
    "In this variation, paper disproves spock by covering it, and spock smashes scissors because it is more advanced.",
    "In the game, lizard poisons Spock by licking it, and rock crushes lizard because it is heavier.",
    "The rock-paper-scissors-lizard-spock game has become popular in many online communities and is often used as a way to make decisions or settle disputes.",
    "There are many online versions of this game available, and some even include animations and sound effects to make the experience more fun.",
    "Playing rock-paper-scissors-lizard-spock can improve your decision-making skills and your ability to predict and outsmart your opponents." ,
    "The game of rock-paper-scissors originated in China over 2,000 years ago.",
    "In Japan, there is a variation of the game called Jan Ken Pon.",
    "The first known mention of the game in Western literature was in the 1860 book 'The Handbook of Games'.",
    "There are over 3,000 possible combinations of throws in rock-paper-scissors.",
    "In some versions of the game, there is a fourth option called 'well' or 'water', which defeats both rock and scissors.",
    "A variation of rock-paper-scissors called 'rock-paper-scissors-lizard-Spock' was popularized by the TV show 'The Big Bang Theory'.",
    "The longest game of rock-paper-scissors ever played lasted for 101 hours.",
    "In the World RPS Championships, players use a seeding system based on their previous year's performance.",
    "The World RPS Society has a code of conduct which specifies rules for fair play and sportsmanship.",
    "There are various rock-paper-scissors tournaments and leagues held around the world.", 
    "In some cultures, rock-paper-scissors is used as a way to make important decisions, such as who will go first in a game or who gets to keep an object.",
    "Rock-paper-scissors has been studied by game theorists as a model for conflict and cooperation in human society.",
    "There are various strategies for winning at rock-paper-scissors, including the 'conditional response' strategy, which involves observing your opponent's previous moves and adjusting your own moves accordingly.",
    "In 2006, a group of researchers developed a robot that could beat humans at rock-paper-scissors by using a high-speed camera to detect and analyze the opponent's hand movements.",
    "Rock-paper-scissors has been used as a teaching tool in mathematics and probability theory.",
    "The game has inspired various spin-off games and variations, such as 'rock-paper-scissors-lizard-Spock', 'rock-paper-scissors-fire-water', and 'rock-paper-scissors-dynamite'.",
    "There is a World Rock Paper Scissors Society that promotes the game and organizes international competitions.",
    "In the 19th century, the game was popularized in the West by Japanese immigrants.",
    "There are various superstitions associated with the game, such as the belief that certain hand gestures or patterns are luckier than others.",
    "Rock-paper-scissors has been featured in popular culture, including in movies, TV shows, and video games."
  ];
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
function addicon(){ 
    icon.setAttribute("class", botIconValue);
    handicon.appendChild(icon);
}

function botChoice(){
    switch(finalbotval)
    {
        case 1: botChoiceValue ="Rock"
                botIconValue="fa-sharp fa-solid fa-hand-back-fist fa-beat"
                addicon()
                break;
        case 2: botChoiceValue ="Paper"
                botIconValue="fa-sharp fa-solid fa-hand fa-beat"
                addicon()
                break
        case 3: botChoiceValue ="Scissors"
                botIconValue="fa-sharp fa-solid fa-hand-scissors fa-beat"
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
    dispGamRes.style.backgroundColor = '#7dfa61';
    playerScoreIncrement++;
    playerScoreCounter.innerHTML = playerScoreIncrement;
    botChoice()
   
}
function botPoint(){
    dispGamRes.innerHTML="You Lost";
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
    dispGamRes.style.backgroundColor = '#ffffff00';
    dispGamRes.innerHTML="PLAY";
    dispBotRes.innerHTML="Bot is sleeping..."
    handicon.removeChild(icon);
}
function changeTheme(){
    body.style.backgroundColor = themeColours[themeColourIncrement];
    scoreSection.style.backgroundColor = themeColours2[themeColourIncrement];
    luckFact.style.backgroundColor = themeColours2[themeColourIncrement];
    navbar.style.backgroundColor = themeColours3[themeColourIncrement];
    themeColourIncrement++;
    if (themeColourIncrement==themeColours.length) {
        themeColourIncrement = 0;
    }
}
function luckFactGenerator(){
    luckFactPara.innerHTML=luckFactArray[Math.floor(Math.random()*luckFactArray.length)]
}
luckFactGenerator();
function copyTheFact() {
    const text = luckFactPara.textContent;
    copyTextToClipboard(text);
  }
  function copyTextToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  }
 let sec = 0;
 let min =0;
  function start(){
setTimeout(()=> {
    
    if (sec==60)
    {
        min++
        sec=0
    }
    if (sec<10) {
        timer.innerHTML=min+":0"+sec  
    }
    else{
    timer.innerHTML= min+":"+sec  
    }
    sec++
    start()
},1000)
}
start()
function resetTimer(){
    sec=0
    min=0
}
