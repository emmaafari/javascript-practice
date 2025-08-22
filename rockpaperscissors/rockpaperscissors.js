function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const choice = Math.floor(Math.random() * choices.length);
	return choices[choice];
}

const getHumanChoice = (choice) => {
	return choice;
};

let humanScore = 0;
let computerScore = 0;

const playRound = (humanChoice, computerChoice) => {
	if (humanChoice === computerChoice) {
		console.log("Its a tie!");
	} else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
		humanScore += 1;
		console.log(`You win! ${humanChoice} beats ${computerChoice}. Human Score: ${humanScore}`);
	} else {
		computerScore += 1;
		console.log(`You lose! ${computerChoice} beats ${humanChoice}. Computer Score: ${computerScore}`);
	}
};

const playGame = () => {
	const rounds = 5;
	for (let index = 1; index <= rounds; index++) {
		const computerChoice = getComputerChoice();
		const humanChoice = getHumanChoice("rock");
		playRound(humanChoice, computerChoice);
	}

	console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
	if (humanScore > computerScore) {
		console.log("Congratulations! You win the game!");
	} else if (humanScore < computerScore) {
		console.log("Sorry! The computer wins the game.");
	} else {
		console.log("It's a tie!");
	}
};

playGame();
