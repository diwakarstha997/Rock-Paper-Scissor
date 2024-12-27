function playGame() {

    // Initialize computer and human score variables
    let computerScore = 0
    let humanScore = 0

    // Initialize invalid input flag for user
    let invalidFlag = false

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

    // function to get input from user
    function getHumanChoice() {

        // Get user input
        let choice = prompt("Type Rock, Paper and Scissor, \n *if you put invalid input you are Disqualified")

        // return user input in lowercase
        return choice.toLowerCase()
    }

    // function to check round winner
    function playRound(computerChoice, humanChoice) {

        // if computer choice is equal to human choice, print round is tie
        if( computerChoice === humanChoice ) {
            alert(`It's Tie, both of you choose ${computerChoice}`)
        }

        // if comupter choice and human choice are (rock, paper) or (paper, scissor) or (scissor, rock), print round winner is human 
        else if ( computerChoice === "rock" && humanChoice === "paper" || computerChoice === "paper" && humanChoice === "scissor" || computerChoice === "scissor" && humanChoice === "rock" ) {
            humanScore += 1
            alert(`You won, ${humanChoice} beats ${computerChoice}`)
        }  

         // if human choice and computer choice are (rock, paper) or (paper, scissor) or (scissor, rock), print round winner is computer 
        else if ( humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissor" || humanChoice === "scissor" && computerChoice === "rock" ) {
            computerScore += 1
            alert(`You lost, ${computerChoice} beats ${humanChoice}`)

        // if Input is invalid turn invalid flag on
        } else {
            invalidFlag = true
        }
    }

    // loop Round 1 to 5 
    for (i = 1; i <= 5; i++) {

        alert(`Round: ${i} \n computer score: ${computerScore} \n your score: ${humanScore}`)

        // start the round with computer choice and human choice
        playRound(getComputerChoice(), getHumanChoice());

        // if invalid flag is true, break the loop
        if(invalidFlag) break;
    }

    // if invalid flag is true, print disqaulified
    if(invalidFlag) {
        alert(`Disqualified!!! Due to invalid input`)
    } 
    // if computer score is less than human score, print human won
    else if(computerScore < humanScore) {
        alert(`Congratulation!! you WON!!! \n computer score: ${computerScore} \n your score: ${humanScore}`)
    } 
    // if computer score is greater than human score, print computer won
    else if(computerScore > humanScore) {
        alert(`Out of Luck!! Computer WON!!! \n computer score: ${computerScore} \n your score: ${humanScore}`)
    }
    // if computer and human score is same, print tie
    else {
        alert(`Game is Tie!!! \n computer score: ${computerScore} \n your score: ${humanScore}`)
    }
}

// start the game
playGame()