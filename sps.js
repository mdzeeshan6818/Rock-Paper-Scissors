let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    // random select rock,paper,scissors
    const options = ["rock", "paper", "scissors"];
    // Math.random() ~ for generating random no.s between 0 to 1
    // Math.random() * 3 it genrates random no. b/w 0 to 2 // nasically jisse bhi multiply krnge usse ek km k range m aayega
    // Math.floor(Math.random() * 10) ~ generates random whole no.s b/w 0 to 9
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was draw.Play Again";
    msg.style.backgroundColor = "blue";

}

const showWinner = (userWin, userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText =userScore;
        console.log(" You Win!");
        msg.innerText = `you Win! Your ${userChoice} beats ${compChoice} ` ;
        msg.style.backgroundColor = "green";
    }
    else{
        console.log("You Lose!");
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =  `you Lose! ${compChoice} beats Your ${userChoice} ` ;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("userChoice = ", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice is = ", compChoice);
    if (userChoice === compChoice) {
        //Draw
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors " ? false : true;
        }
        else if (userChoice === "scissors ") {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice,compChoice);


    }

};

choices.forEach((choice) => {
    // console.log(choice);
    const userChoice = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });
});