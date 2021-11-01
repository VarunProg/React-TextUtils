import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');//enter text here
    
    const ClicklUpHandle = () => {
        // console.log("clicked" + text);
        // setText('you have clicked hanled up click' );
        let newText= text.toUpperCase();
        setText(newText);
    }
   

    const handleOnchange=(event)=>{
        //console.log(event.target.value)//grab event object
        setText(event.target.value);
        
    }

    const ClickLoHandle=()=>{
        let newText= text.toLowerCase();
        setText(newText);
    }
   

    const ClearText=()=>{
        
        setText('');
    }
    const handleExtraSpaces=()=>{
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    
    return (
        
    <div>
        <h1>{props.heading}</h1>
       
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={ClicklUpHandle}>Convert text to Uppercase</button>
        <button className="btn btn-primary ms-2" onClick={ClickLoHandle}>Convert text to LowerCase</button>
        <button className="btn btn-primary ms-2" onClick={ClearText}>Clear Text</button>
        <button className="btn btn-primary ms-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <div className="container my-2">
            <h3>Your text summary </h3>
            <p>Total characters {text.length}</p>
            <p>Number of words are {text.split(" ").length}</p>
            <p>Minutes to read{0.008 * text.split(" ").length}</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </div>
    );
}
