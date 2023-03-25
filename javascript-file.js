// Count wins

    let playerWinTally = 0;
    let computerWinTally = 0;
    let roundCounter = 0;

    

// Create Three Buttons, one for each rps selection
    const playerChoiceRock = document.querySelector('#Rock');
    playerChoiceRock.addEventListener('click', () => {
        playRound('Rock', getComputerChoice());
    });

    const playerChoicePaper = document.querySelector('#Paper');
    playerChoicePaper.addEventListener('click', () => {
        playRound('Paper', getComputerChoice());
    });

    const playerChoiceScissors = document.querySelector('#Scissors');
    playerChoiceScissors.addEventListener('click', () => {
        playRound('Scissors', getComputerChoice());
    });

// Add a div for displaying results and change all of your console.log into DOM methods
    const results = document.querySelector('.results');

    

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
                computerWinTally += 1;
                roundCounter += 1;
                if (roundCounter === 5 && playerWinTally > computerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Player Wins!`;              
                }
                if (roundCounter === 5 && computerWinTally > playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer Wins!`;
                }
                if (roundCounter === 5 && computerWinTally === playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer and Player are Tied! DRAW!`;
                }
                if (roundCounter < 5){
                    results.textContent = `Round ${roundCounter}: You Lose! Paper beats Rock! Player Win Total: ${playerWinTally}; Computer Win Total: ${computerWinTally}`;
                }
            } else if (computerSelection === 'Scissors'){
                playerWinTally += 1;
                roundCounter += 1;
                if (roundCounter === 5 && playerWinTally > computerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Player Wins!`; 
                }
                if (roundCounter === 5 && computerWinTally > playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer Wins!`;
                }
                if (roundCounter === 5 && computerWinTally === playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer and Player are Tied! DRAW!`;
                }
                if (roundCounter < 5){
                    results.textContent = `Round ${roundCounter}: You Win! Rock beats Scissors! Player Win Total: ${playerWinTally}; Computer Win Total: ${computerWinTally}`;
                }
            } else {
                roundCounter += 1;
                if (roundCounter === 5 && playerWinTally > computerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Player Wins!`;
                    
                }
                if (roundCounter === 5 && computerWinTally > playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer Wins!`;
                }
                if (roundCounter === 5 && computerWinTally === playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer and Player are Tied! DRAW!`;
                }
                if (roundCounter < 5){
                    results.textContent = `Round ${roundCounter}: You Tied! Player Win Total: ${playerWinTally}; Computer Win Total: ${computerWinTally}`;
                }
            }
        }
        if (playerSelection === 'Paper'){
            if (computerSelection === 'Rock'){
                playerWinTally += 1;
                roundCounter += 1;
                if (roundCounter === 5 && playerWinTally > computerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Player Wins!`;              
                }
                if (roundCounter === 5 && computerWinTally > playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer Wins!`;
                }
                if (roundCounter === 5 && computerWinTally === playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer and Player are Tied! DRAW!`;
                }
                if (roundCounter < 5){
                    results.textContent = `Round ${roundCounter}: You Win! Paper beats Rock! Player Win Total: ${playerWinTally}; Computer Win Total: ${computerWinTally}`;
                }
                
                
            } else if (computerSelection === 'Scissors'){
                computerWinTally += 1;
                roundCounter += 1;
                if (roundCounter === 5 && playerWinTally > computerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Player Wins!`;              
                }
                if (roundCounter === 5 && computerWinTally > playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer Wins!`;
                }
                if (roundCounter === 5 && computerWinTally === playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer and Player are Tied! DRAW!`;
                }
                if (roundCounter < 5){
                    results.textContent = `Round ${roundCounter}: You Lose! Scissors beats Paper! Player Win Total: ${playerWinTally}; Computer Win Total: ${computerWinTally}`;
                }

            } else {
                roundCounter += 1;
                if (roundCounter === 5 && playerWinTally > computerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Player Wins!`;              
                }
                if (roundCounter === 5 && computerWinTally > playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer Wins!`;
                }
                if (roundCounter === 5 && computerWinTally === playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer and Player are Tied! DRAW!`;
                }
                if (roundCounter < 5){
                    results.textContent = `Round ${roundCounter}: You Tied! Player Win Total: ${playerWinTally}; Computer Win Total: ${computerWinTally}`;
                }
                
                
            }
        }
        if (playerSelection === 'Scissors'){
            if (computerSelection === 'Rock'){
                computerWinTally += 1;
                roundCounter += 1;
                if (roundCounter === 5 && playerWinTally > computerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Player Wins!`;              
                }
                if (roundCounter === 5 && computerWinTally > playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer Wins!`;
                }
                if (roundCounter === 5 && computerWinTally === playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer and Player are Tied! DRAW!`;
                }
                if (roundCounter < 5){
                    results.textContent = `Round ${roundCounter}: You Lose! Rock beats Scissors! Player Win Total: ${playerWinTally}; Computer Win Total: ${computerWinTally}`;
                }
                
                
            } else if (computerSelection === 'Paper'){
                playerWinTally += 1;
                roundCounter += 1;
                if (roundCounter === 5 && playerWinTally > computerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Player Wins!`;              
                }
                if (roundCounter === 5 && computerWinTally > playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer Wins!`;
                }
                if (roundCounter === 5 && computerWinTally === playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer and Player are Tied! DRAW!`;
                }
                if (roundCounter < 5){
                    results.textContent = `Round ${roundCounter}: You Win! Scissors beats Paper! Player Win Total: ${playerWinTally}; Computer Win Total: ${computerWinTally}`;
                }
               
                
            } else {
                roundCounter += 1;
                if (roundCounter === 5 && playerWinTally > computerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Player Wins!`;              
                }
                if (roundCounter === 5 && computerWinTally > playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer Wins!`;
                }
                if (roundCounter === 5 && computerWinTally === playerWinTally){
                    results.textContent = `5 ROUND MATCH RESULTS: Computer and Player are Tied! DRAW!`;
                }
                if (roundCounter < 5){
                    results.textContent = `Round ${roundCounter}: You Tied! Player Win Total: ${playerWinTally}; Computer Win Total: ${computerWinTally}`;
                }
                
                
            }
            }
            if (roundCounter === 5){
                roundCounter = 0;
                computerWinTally = 0;
                playerWinTally = 0;
            }

        };



