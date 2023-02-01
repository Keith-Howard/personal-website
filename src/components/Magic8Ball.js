import './Magic8Ball.css';
import React from 'react';

function Magic8Ball() {
    const [eightBall, setEightBall] = React.useState("./magic8BallPics/magic8ball.png");
    //const [question, setQuestion] = React.useState('');
    const responses = [["countOnIt", "no", "notNow", "yes"],
                         ["askAgain", "cannotTellNow", "maybe", "waitForIt"]];

    return (
        <div className="eightballBackground">
            <div className='magic8BallContainer'>
                <table className='eightBalluiTable'>
                    <tr>
                        <td>
                            <img className="eightballImg" src={eightBall}></img>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input className="inputQuestion" placeholder='ASK QUESTION...'></input>
                            <button onClick={()=> {
                                let firstResponseIndex = Math.floor(Math.random() * 2);
                                let secondResponseIndex = Math.floor(Math.random() * 4);
                                setEightBall(`./magic8BallPics/${responses[firstResponseIndex][secondResponseIndex]}.png`)}}>Shake!</button>
                        </td>
                    </tr>
                </table>
            </div>  
        </div>
    )
}

export default Magic8Ball;