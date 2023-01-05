import './Magic8Ball.css';
import React from 'react';

function Magic8Ball() {
    const [eightBall, setEightBall] = React.useState("./magic8BallPics/magic8ball.png");
    const responses = [["absolutely", "countOnIt", "no", "notNow", "veryLikely", "yes"],
                         ["askAgain", "cannotTellNow", "maybe", "waitForIt"]];
    return (
        <div className="eightballBackground">
            <div className='magic8BallContainer'>
                <table className='eightBalluiTable'>
                    <tr>
                        <img className="eightballImg" src={eightBall}></img>
                    </tr>
                    <tr>
                        <input className="inputQuestion" placeholder='ASK QUESTION...'></input>
                        <button onClick={()=> setEightBall("./magic8BallPics/yes.png")}>Shake!</button>
                    </tr>
                </table>
            </div>  
        </div>
    )
}

export default Magic8Ball;