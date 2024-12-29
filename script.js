const container = document.querySelector("#container");

const gameHeading = document.querySelector("h1");

const resultDiv = document.createElement("div");
const scoreBoard = document.createElement("span");
const msgBoard = document.createElement("div");

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorBtn = document.createElement("button");

container.style.width = "500px";
container.style.height = "500px";
container.style["background-color"] = "green";
container.style.margin = "auto";
container.style["text-align"] = "center";

gameHeading.style["padding-top"] = "20px";

scoreBoard.style["font-size"] = "32px";
resultDiv.appendChild(scoreBoard);

msgBoard.style["font-size"] = "22px";
resultDiv.appendChild(msgBoard);
container.appendChild(resultDiv);

rockBtn.textContent = "Rock";
rockBtn.value = "rock";
rockBtn.style.margin = "10px"
container.appendChild(rockBtn);

paperBtn.textContent = "Paper";
paperBtn.value = "paper";
paperBtn.style.margin = "10px"
container.appendChild(paperBtn);

scissorBtn.textContent = "Scissor";
scissorBtn.value = "scissor";
scissorBtn.style.margin = "10px"
container.appendChild(scissorBtn);






function playGame() {

    // Initialize computer and human score variables
    let computerScore = 0
    let humanScore = 0

    // function to get computer choice using random number from 1 to 3
    function getComputerChoice() {

        // Get Random number from 1 to 3
        let choice = Math.ceil(Math.random() * 3);

        // if choice is 1 return "rock"
        if ( choice == 1 ) {
            return "rock"
        }

        //if choice is 2 return "paper"
        if ( choice == 2 ) {
            return "paper"
        }

        // if choice is 3 return "scissor"
        if ( choice == 3 ) {
            return "scissor"
        }
    }

    function resetGame() {
        computerScore = 0;
        humanScore = 0;
    }

    function checkWinner() {
        // if human score is 5, print human won
        if(humanScore == 5) {
            scoreBoard.textContent =`Congratulation!! you WON!!! \n computer score: ${computerScore} \n your score: ${humanScore}`
            resetGame()
        } 
        // if computer score is 5, print computer won
        if(computerScore == 5) {
            scoreBoard.textContent =`Out of Luck!! Computer WON!!! \n computer score: ${computerScore} \n your score: ${humanScore}`
            resetGame()
        }
    }


    // function to check round winner
    function playRound(computerChoice, humanChoice) {

        // if computer choice is equal to human choice, print round is tie
        if( computerChoice === humanChoice ) {
            scoreBoard.textContent =`computer score: ${computerScore} \n your score: ${humanScore}`
            msgBoard.textContent =`It's Tie, both of you choose ${computerChoice}`
        }

        // if comupter choice and human choice are (rock, paper) or (paper, scissor) or (scissor, rock), print round winner is human 
        if ( computerChoice === "rock" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissor" || computerChoice === "scissor" && humanChoice === "rock" ) {
            humanScore += 1
            scoreBoard.textContent =`computer score: ${computerScore} \n your score: ${humanScore}`
            msgBoard.textContent =`You won, ${humanChoice} beats ${computerChoice}`

        }  

         // if human choice and computer choice are (rock, paper) or (paper, scissor) or (scissor, rock), print round winner is computer 
        if ( humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "rock" ) {
            computerScore += 1
            scoreBoard.textContent =`computer score: ${computerScore} \n your score: ${humanScore}`
            msgBoard.textContent =`You lost, ${computerChoice} beats ${humanChoice}`
        } 
        checkWinner();
    }

    scoreBoard.textContent =`computer score: ${computerScore} \n your score: ${humanScore}`
    msgBoard.textContent =`The game is about to Start`;

    // start the round with computer choice and human choice
    rockBtn.addEventListener('click', () => {
        playRound(getComputerChoice(),rockBtn.value)
    })

    paperBtn.addEventListener('click', () => {
        playRound(getComputerChoice(),paperBtn.value)
    })

    scissorBtn.addEventListener('click', () => {
        playRound(getComputerChoice(),scissorBtn.value)
    })
}

// start the game
playGame()