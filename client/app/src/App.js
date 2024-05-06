import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './user_management/Login';
import Home from './user_management/Home';
import Navbar from './user_management/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
