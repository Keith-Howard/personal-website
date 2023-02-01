import React from 'react';
import './RockPaperScissors.css';

function RockPaperScissors() {
	// let background = getElementById('root');
	// document.body.style.backgroundImage = "url(backgroundPhoto.png)";
    console.log('Rock Paper Scissors');
	const scissors = 1;
	const paper = 2;
	const rock = 3;
	const [userImage, setUserImage] = React.useState('');
	const [computerImage, setComputerImage] = React.useState('');
	const [outcome, setOutcome] = React.useState('');
	const [userWinCount, setUserWinCount] = React.useState(0);
	const [compWinCount, setCompWinCount] = React.useState(0);
	const [drawCount, setDrawCount] = React.useState(0);
	const [winPercent, setWinPercent] = React.useState(0);


	function updateWinPercentageCalculation(user, comp, draw) {
		setWinPercent(((user / (user + comp + draw)) * 100).toFixed(2));
	}
	
	function setComputerNumAndPhoto() {
		let computerNum = Math.floor(Math.random() * 3) + 1;
		switch (computerNum) {
			case scissors:
				setComputerImage(<img id="compImg" className="img" src="./rockPaperScissorsPics/scissors.png"></img>);
				break;
			case paper:
				setComputerImage(<img id="compImg" className="img" src="./rockPaperScissorsPics/paper.png"></img>)
				break;
			default:
				setComputerImage(<img id="compImg" className="img" src="./rockPaperScissorsPics/rock.png"></img>);
				}
		return computerNum
	}

	function userChoice(choice, image) {
		document.getElementById("scissors").disabled = true;
		document.getElementById("paper").disabled = true;
		document.getElementById("rock").disabled = true;
		let userWins = userWinCount;
		let compWins = compWinCount;
		let draws = drawCount;
		console.log('user chose ' + choice);
		setUserImage(image);
		let computerNum = setComputerNumAndPhoto();
		let userNum = choice;
		if (userNum === paper && computerNum === rock || 
			userNum === rock && computerNum === scissors || 
			userNum === scissors && computerNum === paper) {
			setOutcome(<p id="outcomeMessage">!YOU WON!</p>)
			userWins++;
			setUserWinCount(userWins);
		} else if (userNum === computerNum) {
			setOutcome(<p id="outcomeMessage">!Draw, Nobody Wins!</p>);
			draws++;
			setDrawCount(draws);
		} else {
			setOutcome(<p id="outcomeMessage">!YOU LOST!</p>);
			compWins++;
			setCompWinCount(compWins);
		}

		updateWinPercentageCalculation(userWins, compWins, draws);
	};


    return (
		<div className="mainContainer">
			<div id="wrapper">
			<table id="mainTable">
				<tr>
					<td>
						<div id="outcomeMessageContainer" className="blinkMe">{outcome}</div>
					</td>
				</tr>
				<tr>
					<td>
						<table id="rockPaperScissorTable">
							<tr>
								<td>
									<button className="choiceButton" id="rock" onClick={() => {userChoice(rock, <img id="userImg" className="img" src="./rockPaperScissorsPics/rock.png"></img>)}}>Rock</button>
								</td>
								<td>
									<button className="choiceButton" id="paper" onClick={() => {userChoice(paper, <img id="userImg" className="img" src="./rockPaperScissorsPics/paper.png"></img>)}}>Paper</button>
								</td>
								<td>
									<button className="choiceButton" id="scissors" onClick={() => {userChoice(scissors, <img id="userImg" className="img" src="./rockPaperScissorsPics/scissors.png"></img>)}}>Scissors</button>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table id="choiceTable">
							<tr>
								<td>
									<label className="playerLabel">User</label>
								</td>
								<td>
									<label className="playerLabel">Computer</label>
								</td>
							</tr>
							<tr>
								<td>
									<div className="imgContainer" id="userChoice">{userImage}</div>
								</td>
								<td>
									<div className="imgContainer" id="computerChoice">{computerImage}</div>
								</td>
							</tr>
						</table>
					</td>
				</tr>	
				<tr>
					<td>
						<table id="winStatTable">
							<tr>
								<td>
									<p>User<br/>Wins</p>
									<div className="winContainer" id="userWon">{userWinCount}</div>
								</td>
								<td>
									<p>Computer<br/>Wins</p>
									<div className="winContainer" id="computerWon">{compWinCount}</div>
								</td>
								<td>
									<p><br/>Draws </p>
									<div className="winContainer" id="draws">{drawCount}</div>
								</td>
								<td>
									<p>User Win<br/>Percentage</p>
									<div className="winPercentage" id="userWinPercentage">{winPercent}</div>
								</td>
							</tr>
						</table>
					</td>
				</tr>
				<tr>
					<td>
						<table id="newGameResetTable">
							<tr>
								<td>
									<button className="playAgainButton outcomeRow" id="newGame" onClick={() => {
										document.getElementById("rock").disabled = false;
										document.getElementById("paper").disabled = false;
										document.getElementById("scissors").disabled = false;
										setUserImage('');
										setComputerImage('');
										setOutcome('');
									}}>Play Again</button>
								</td>
								<td>
									<button className="resetButton" onClick={() => {
										setUserWinCount(0);
										setCompWinCount(0);
										setDrawCount(0);
										setWinPercent(0);
									}}>Reset Stats</button>
								</td>
							</tr>
						</table>
					</td>	
				</tr>
			</table>
			</div>
		</div>
    )
}

export default RockPaperScissors;