import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import Home from './Home';
import Contato from './Contato';
import Somos from './Somos';

function App() {
  return (
    <div className="App">
       <Router>
          <Routes>
               <Route exact path="/" element={<h1>Home Page</h1>}></Route>
               <Route exact path="Home" element={<Home/>}></Route>
               <Route exact path="Somos" element={<Somos/>}></Route>
               <Route exact path="Contato" element={<Contato/>}></Route>
          </Routes>

          <div className='list'>
              <ul>
                <li><Link to="/">Principal</Link></li>
                <li><Link to="Home">Home</Link></li>
                <li><Link to="Somos">Somos</Link></li>
                <li><Link to="Contato">Contato</Link></li>

              </ul>

          </div>
       </Router>

      
    </div>
  );
}

export default App;



// site com a rotas v6  - https://dev.to/salehmubashar/react-router-dom-36a2
