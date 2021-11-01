
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light'); // to check the dark mode
  const [text, settext] = useState('Enable Dark Mode');
  const [alert, setalert] = useState(null); // setting alert initial value is null
  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      settext('Enable Light Mode');
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been Enabled", "success"); // calling showAlert fucntion and passing arguments
    }
    else {
      setmode('light');
      settext('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "Success");
    }
  }

  const showAlert = (message, type) => { // updating alert by using function and setting parameters
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => { //remove alert and by default null
      setalert(null);
    }, 1500);
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} text={text} />
        <Alert alert={alert} />
        <div className="container my-3">
  
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
