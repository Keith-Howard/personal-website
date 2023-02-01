import './Home.css';

function Home() {
    console.log('Home');
    return (
        <div className="homeWrapper">
            <div className="homeContainer">
                <h1 className="homeText">Welcome</h1>
                <h1 className="homeText">To My Site,</h1>
                <h1 className="homeText">Browse My Art</h1>
                <h1 className="homeText">Or</h1>
                <h1 className="homeText">Play Rock Paper Scissors,</h1>
                <h1 className="homeText">Lookout for Future Updates</h1>
                <h1 className="homeText">Enjoy</h1>
            </div>
        </div>
    )
}

export default Home;