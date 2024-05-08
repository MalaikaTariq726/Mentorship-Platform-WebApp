import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './user_management/Login';
import Home from './user_management/Home';
import Navbar from './user_management/Navbar';
import SetRole from './user_management/RoleSelection';
import './App.css';
import ForgotPassword from './user_management/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/setrole" element={<SetRole/>}/>
          <Route path="/forgot" element={<ForgotPassword/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
