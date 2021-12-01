import Login from "./pages/Login/Login";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import RequireAuth from './Components/RequireAuth';
import './App.css';



function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Navigate replace to={"/login"} />} />
          <Route path="/login" element={<Login/>}  />
          <Route path="/admin" element = {< Admin />} />
          <Route exact path="/profile" element={<Profile/>} />
        </Routes>
    </Router>  
    </div> 
  );
}

export default App;
