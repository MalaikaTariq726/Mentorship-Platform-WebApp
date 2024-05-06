<<<<<<< HEAD

import './App.css';
import Login from './user_management/Login';
import Main from './user_management/Main';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
=======
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './user_management/Login';
import Home from './user_management/Home';
import Navbar from './user_management/Navbar';
import './App.css';
>>>>>>> 92d3414a5c08e86cf4b37a02903908a22828fc4e

function App() {
  return (
    <div className="App">
<<<<<<< HEAD

      <Login/>
=======
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </Router>
>>>>>>> 92d3414a5c08e86cf4b37a02903908a22828fc4e
    </div>
  );
}

export default App;
