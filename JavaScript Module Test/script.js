// Initialize scores from localStorage or set them to 0
let userScore = parseInt(localStorage.getItem('userScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
let move = document.getElementById("rules-button");
let win;

// Function to update the score display
function updateScoreDisplay() {
    document.getElementById('user-score').innerText = userScore;
    document.getElementById('computer-score').innerText = computerScore;
}

// Function to save scores to localStorage
function saveScoresToLocalStorage() {
    localStorage.setItem('userScore', userScore.toString());
    localStorage.setItem('computerScore', computerScore.toString());
}

// Function to determine the winner of a round
function determineWinner(user, computer) {
    if (user === computer) {
        return 'TIE UP';
    } else if (
        (user === 'rock' && computer === 'scissors') ||
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper')
    ) {
        userScore++;
        updateScoreDisplay();
        saveScoresToLocalStorage();
        return 'YOU WIN AGAINST PC';
    } else {
        computerScore++;
        updateScoreDisplay();
        saveScoresToLocalStorage();
        return 'YOU LOST AGAINST PC';
    }
}

// Function to generate a random choice for the computer
function computerChoice() {
    const options = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

// Function called when the user makes a choice
function userChoice(choice) {

    // Get computer's choice
    const computer = computerChoice();
    //disable users choice buttons
    document.getElementById('rock').style.display = 'none';
    document.getElementById('paper').style.display = 'none';
    document.getElementById('scissors').style.display = 'none';


    document.getElementById('YoursChoice').style.display = 'block';
    if (choice === 'rock') {
        document.getElementById('uc-rock').style.display = 'block';
    }else if (choice === 'paper') {
        document.getElementById('uc-paper').style.display = 'block';
    }else{
        document.getElementById('uc-scissors').style.display = 'block';
    }

    document.getElementById('ComputerChoice').style.display = 'block';
    if (computer === 'rock') {
        document.getElementById('cc-rock').style.display = 'block';
    } else if (computer === 'paper') {
        document.getElementById('cc-paper').style.display = 'block';
    } else {
        document.getElementById('cc-scissors').style.display = 'block';
    }

    // Determine the winner and display the outcome
    const outcome = determineWinner(choice, computer);
    document.getElementById('outcome').innerText = outcome;
    if (outcome === 'YOU WIN AGAINST PC') {
        win = true;
        document.getElementById('next-button').style.display = 'block';
        move.className = move.className + " move";
    }

    // Show the "Play Again" button
    document.getElementById('play-again').style.display = 'block';
}


// Function to reset the game and show user choice buttons
function playAgain() {
    // Show all user choice buttons
    document.getElementById('rock').style.display = 'block';
    document.getElementById('paper').style.display = 'block';
    document.getElementById('scissors').style.display = 'block';
    document.getElementById('uc-rock').style.display = 'none';
    document.getElementById('uc-paper').style.display = 'none';
    document.getElementById('uc-scissors').style.display = 'none';
    document.getElementById('cc-rock').style.display = 'none';
    document.getElementById('cc-paper').style.display = 'none';
    document.getElementById('cc-scissors').style.display = 'none';
    document.getElementById('YoursChoice').style.display = 'none';
    document.getElementById('ComputerChoice').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    
    if (win) {
        move.className = move.className - " move";
    }

    // Hide the "Play Again" button
    document.getElementById('play-again').style.display = 'none';

    // Clear the outcome text and user/computer choices
    document.getElementById('outcome').innerText = '';
}

// Call updateScoreDisplay on page load to show scores
updateScoreDisplay();

// Function to show the rules modal
function showRules() {
    document.getElementById('rules-modal').style.display = 'block';
}

// Function to close the rules modal
function closeRules() {
    document.getElementById('rules-modal').style.display = 'none';
}

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
    const modal = document.getElementById('rules-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Function to handle the "next" button click
function next() {
    // Hide the game container
    document.getElementById('game-container').style.display = 'none';

    // Show the winning image
    document.getElementById('winning-img').style.display = 'block';
    document.getElementById('play-game-again').style.display = 'block';
    document.getElementById('confetti').style.display = 'block';
    document.getElementById('next-button').style.display = 'none';
    move.className = move.className - " move";
}

function playGameAgain() {
    document.getElementById('winning-img').style.display = 'none';
    document.getElementById('play-game-again').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    document.getElementById('confetti').style.display = 'none';
    playAgain();
}

