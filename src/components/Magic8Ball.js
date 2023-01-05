import './Magic8Ball.css';
function Magic8Ball() {
    console.log('Test');
    return (
        <div className="eightballBackground">
            <div className='magic8BallContainer'>
                <input placeholder='ASK QUESTION...'></input>
                <button>Shake</button>
            </div>  
        </div>
    )
}

export default Magic8Ball;