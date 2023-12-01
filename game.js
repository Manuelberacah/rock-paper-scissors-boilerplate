
var playerIndex=0
var randIndex=0
var player=0
var Comp=0
hands=["./assets/rock-hand.png","./assets/paper-hand.png","./assets/scissors-hand.png"]
var score1=document.getElementById("score1")
var score2=document.getElementById("score2")
var playerHand=document.getElementById("PlayerHand")
var compHand=document.getElementById("compHand")
var temp=document.getElementById("temp")
var buttons=document.getElementById("button")
var result = document.getElementById("result")


function random_gen(){

    randIndex=Math.floor(Math.random()*3)
    console.log(randIndex)
    return randIndex
}

function insertor(index){
    playerIndex=index
    playerHand.removeAttribute("src")
    playerHand.setAttribute("src",`${hands[index]}`)
    compHand.removeAttribute("src")
    compHand.setAttribute("src",`${hands[random_gen()]}`)
    checker()
    end()
    

}
function checker(){
    let flag_check
    flag_check=playerIndex-randIndex
    if (flag_check==1){
        player+=1
    }else if(flag_check==-1){
        Comp+=1
    }else if(flag_check==-2){
        player+=1
    }else if(flag_check==2){
        Comp+=1
    }
    score1.textContent=player
    score2.textContent=Comp

    
}
function end(){
    if (Comp==5 || player==5){
        temp.style.visibility="visible"
        buttons.style.visibility="hidden"
        if(Comp>player){
            result.textContent="computer Wins"
        }else{
            result.textContent="Players Wins"
        }
    }
    
    
}