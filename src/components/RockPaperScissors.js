import React from 'react';

function RockPaperScissors() {
    console.log('Rock Paper Scissors');
    return (
        <div id="wrapper">
            <h1>Rock, Paper, Scissors Shoot</h1>
            <div id="outcomeMessageContainer" className="blinkMe">
                {/* <p id="outcomeMessage">You Lost</p> */}
            </div>
            <table id="mainTable">
			<tr>
				<td>
					<table id="rockPaperScissorTable">
						<tr>
							<td>
								<button className="choiceButton" id="rock">Rock</button>
							</td>
							<td>
								<button className="choiceButton" id="paper">Paper</button>
							</td>
							<td>
								<button className="choiceButton" id="scissors">Scissors</button>
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
								<label>User</label>
							</td>
							<td>
								<label>Computer</label>
							</td>
						</tr>
						<tr>
							<td>
								<div className="container" id="userChoice"></div>
							</td>
							<td>
								<div className="container" id="computerChoice"></div>
							</td>
						</tr>
					</table>
				</td>	
			<tr></tr>
                <td>
					<table id="winStatTable">
						<tr>
							<td>
								<p>User<br/>Wins</p>
								<div className="winContainer" id="userWon"></div>
							</td>
							<td>
								<p>Computer<br/>Wins</p>
								<div className="winContainer" id="computerWon"></div>
							</td>
							<td>
								<p><br/>Draws </p>
								<div className="winContainer" id="draws"></div>
							</td>
							<td>
								<p>User Win<br/>Percentage</p>
								<div className="winPercentage" id="userWinPercentage"></div>
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
								<button className="playAgainButton outcomeRow" id="newGame">Play Again</button>
							</td>
							<td>
								<button className="resetButton" id="resetCountersButton">Reset Stats</button>
							</td>
						</tr>
					</table>
				</td>	
			</tr>
		</table>
    </div>
    )
}

export default RockPaperScissors;