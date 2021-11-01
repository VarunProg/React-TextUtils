
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setmode] = useState('light'); // to check the dark mode
  const [text, settext] = useState('Enable Dark Mode')
  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      settext('Enable Light Mode');
    }
    else{
      setmode('light');
      settext('Enable Dark Mode');
    }
  }
   return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils"  mode={mode} toggleMode={toggleMode} text={text}/>
      <div className="container my-3">
        <TextForm heading="enter the text to analyze below" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
