import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import React from "react";
import bgImage from "./assets/connnn.jpg";
import Home2 from "./Home2"; 
import Login from "./login";
import './index.css';
import CaseInfo from "./CaseInfo";

function App() {
              

  return (
     /*<Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>*/
    //<Home2/>
    <Router>
      <CaseInfo />
    </Router>
  );
}



export default App;


