/** Get Player Choice */
    function getPlayerChoice () {
        let userChoice = prompt("Rock, Paper, Scissors?");
        let capitalizedUserChoice = userChoice.toUpperCase();
        if (capitalizedUserChoice === 'ROCK'){
            return 'Rock';
        }
        if (capitalizedUserChoice === 'PAPER'){
            return 'Paper';
        }
        if (capitalizedUserChoice === 'SCISSORS'){
            return 'Scissors';
        }
        if (capitalizedUserChoice === 'SCISSOR'){
            return 'Scissors';
        }
        else {
            alert('Invalid choice. Please try again');
            getPlayerChoice ();  
        }
    }    

/** Function - getComputerChoice -- return rock, paper or scissors, randomly*/
    function getComputerChoice(){
        let randomInt = Math.floor(Math.random() * 100);
        if (randomInt <= 33) {
            return 'Rock';
        } else if (randomInt >= 67) {
            return 'Paper';
        }
            else {
            return 'Scissors';
            }         
    };
   
/** Function to play single round of Rock Paper Scissors with two parameters 'playerSelection'
*  + 'computerSelection' then return a string that declares the winner "You Lose! Paper beats Rock"*/
    function playRound(playerSelection, computerSelection){
        if (playerSelection === 'Rock'){
            if (computerSelection === 'Paper'){
                alert('You Lose! Paper beats Rock!');
                return 'You Lose!';
            } else if (computerSelection === 'Scissors'){
                alert('You Win! Rock beats Scissors!');
                return 'You Win!';
            } else {
                alert('You Tied! Rock and rock, the less popular cousin to rock and roll!');
                return 'You Tied!';
            }
        }
        if (playerSelection === 'Paper'){
            if (computerSelection === 'Rock'){
                alert('You Win! Paper beats Rock!');
                return 'You Win!';
            } else if (computerSelection === 'Scissors'){
                alert('You Lose! Scissors beats Paper!');
                return 'You Lose!';
            } else {
                alert('You Tied! Paper and paper make for a wet towel fight!');
                return 'You Tied!';
            }
        }
        if (playerSelection === 'Scissors'){
            if (computerSelection === 'Rock'){
                alert('You Lose! Rock beats Scissors!');
                return 'You Lose!';
            } else if (computerSelection === 'Paper'){
                alert('You Win! Scissors beats Paper!');
                return 'You Win!';
            } else {
                alert('You Tied! Scissors and scissors is dangerous though, no running around!');
                return 'You Tied!';
            }
            }
        };
// Create Three Buttons, one for each rps selection
    const playerChoiceRock = document.querySelector('#Rock');
    playerChoiceRock.addEventListener('click', () => {
        playRound('Rock', getComputerChoice);
    });

    const playerChoicePaper = document.querySelector('#Paper');
    playerChoicePaper.addEventListener('click', () => {
        playRound('Paper', getComputerChoice);
    });

    const playerChoiceScissors = document.querySelector('#Scissors');
    playerChoiceScissors.addEventListener('click', () => {
        playRound('Scissors', getComputerChoice);
    });

// Add a div for displaying results and change all of your console.log into DOM methods