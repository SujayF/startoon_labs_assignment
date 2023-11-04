import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/profile';


function App() {
    return (
     
      <Router>
         <Header/>
       <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile/>} />
       </Routes>
      </Router>
      
    );
}

export default App;
