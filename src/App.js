import {Routes, Route, HashRouter} from 'react-router-dom';
import Home from './components/Home';
import RockPaperScissors from './components/RockPaperScissors';
import Test from './components/Test';
import NavBar from './components/Navbar';

function App() {
  return (
    <HashRouter>
      <div>
        <NavBar/>       
          <div className="container ml-2" style={{padding: "20px"}}>
            <Routes>
              <Route path="/components/Test" element={<Test />} />
              <Route path="/components/RockPaperScissors" element={<RockPaperScissors />} />
              <Route path="/" element={<Home />} />
            </Routes>
            </div>
      </div>
    </HashRouter>
  );
}

export default App;
