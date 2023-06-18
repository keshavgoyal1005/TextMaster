import './App.css';
import Darkmode from './components/Darkmode';
import Navbar from './components/Navbar.js';

import Textform from './components/Textform';
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const [mode, setmode] = useState('dark');
  const [changebtntext, setchangebtntext] = useState("Enable light Mode")
  const [changebtncolor, setchangebtncolor] = useState('light')
  if (mode === 'dark') {
    document.body.style.backgroundColor = '#10186f';
  }

  const modeison = () => {
    if (mode === 'dark') {
      setmode('light');
      setchangebtntext("Enable dark Mode")
      setchangebtncolor('dark')
      document.body.style.backgroundColor = 'white';
    }
    else {
      setmode('dark');
      setchangebtntext("Enable light Mode")
      setchangebtncolor('light')
      document.body.style.backgroundColor = '#10186f';

    }
  }

  return (
    <>
      <Router>
        <Navbar title="Textutils" mode={mode} modeison={modeison} changebtntext={changebtntext} changebtncolor={changebtncolor} />
        <div className="container my-4">
          
          <Routes>
            <Route exact path="/" element={ <Textform heading="Enter your text to analyze" mode={mode} />} />
            <Route exact path="/about" element={<Darkmode mode={mode}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
