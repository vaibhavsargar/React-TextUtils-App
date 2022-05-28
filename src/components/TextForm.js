import React, { useState } from "react";

export default function TextForm(props) {
    const handleOnChange = (event) => {
        console.log("on change was clicked");
        setText(event.target.value);
    }
    const handleUpClick = () => {
        console.log("button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        console.log("button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopyClick = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleRemoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    
    const [text, setText] = useState("Enter the Text to convert");
    return (
        <>
            <div className={`container my-${props.value}`} >
                <h1>{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" />
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
                    Copy Text
                </button>
                <button className="btn btn-primary mx-2" onClick={handleRemoveSpaces}>
                    Remove Extra Spaces
                </button>
                <h3></h3>
                <p><b>{text.split(" ").length}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{0.008*text.split(' ').length} </b> minutes reading</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter the text above to preview here"}</p>
            </div>
             
        </>
  );
}
