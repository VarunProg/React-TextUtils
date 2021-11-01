import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');//enter text here

    const ClicklUpHandle = () => {
        // console.log("clicked" + text);
        // setText('you have clicked hanled up click' );
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "Success");
    }


    const handleOnchange = (event) => {
        //console.log(event.target.value)//grab event object
        setText(event.target.value);

    }

    const ClickLoHandle = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "Success");
    }


    const ClearText = () => {

        setText('');
        props.showAlert("Text Clear", "Success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces", "Success");
    }


    return (
        //unable mode and set text color
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1>{props.heading}</h1>

            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8" style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }}></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick={ClicklUpHandle}>Convert text to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={ClickLoHandle}>Convert text to LowerCase</button>
            <button className="btn btn-primary mx-1 my-1" onClick={ClearText}>Clear Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
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
