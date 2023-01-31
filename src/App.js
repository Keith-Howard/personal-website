import {Routes, Route, HashRouter} from 'react-router-dom';
import Home from './components/Home';
import RockPaperScissors from './components/RockPaperScissors';
import Magic8Ball from './components/Magic8Ball';
import MyArt from './components/MyArt';
import NavBar from './components/Navbar';

function App() {
  return (
    <HashRouter>
      <div>
        <NavBar/>       
          <div className="navbarContainer ml-2">
            <Routes>
              <Route path="/components/Magic8Ball" element={<Magic8Ball />} />
              <Route path="/components/MyArt" element={<MyArt />} />
              <Route path="/components/RockPaperScissors" element={<RockPaperScissors />} />
              <Route path="/" element={<Home />} />
            </Routes>
            </div>
      </div>
    </HashRouter>
  );
}

export default App;
