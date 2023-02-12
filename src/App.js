import React from "react";
import "./App.css";
import Header from "./Disney-Clone/Header";
import Home from "./Disney-Clone/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Details from "./Disney-Clone/Details";
import Login from "./Disney-Clone/Login";
 import Admin from "./Disney-Clone/admin-page/Admin";


function App() {
  return (
    <div className="App">
      
      <Router>
        
        <Header />
        <Routes>
          <Route path="/disney" element={<Admin/>}/>
          
          <Route path="/details/:id" element={<Details />} /> 

          <Route path="/login" element={<Login/>}/>
          
          <Route path="/" element={<Home />} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
