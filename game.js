let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#userScore");
const compScorePara=document.querySelector("#compScore");

const genComputerChoice=()=>{
    const options=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}

const drawGame=()=>{
    msg.innerText="Game Was Draw";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,computerChoice )=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose! ${computerChoice} beats ${userChoice}`
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    console.log("User choice = ",userChoice);
    const computerChoice=genComputerChoice();
    console.log("Computer choice = ",computerChoice);
    if(userChoice===computerChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=computerChoice==="scissor"?false:true;
        }
        else{
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});