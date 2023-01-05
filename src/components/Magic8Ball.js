import './Magic8Ball.css';
function Magic8Ball() {
    console.log('Test');
    return (
        <div className="magic8BallContainer">
            <input placeholder='ASK QUESTION'></input>
            <button>Shake</button>
        </div>
    )
}

export default Magic8Ball;