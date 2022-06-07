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
        props.alert('success', 'Converted to Uppercase');
    }
    const handleLoClick = () => {
        console.log("button was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.alert('success', 'Converted to Lowercase');

    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.alert('success', 'Text copied to clipboard');

    }
    const handleRemoveSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.alert('success', 'Extra spaces removed');

    }
    const handleRemoveAll = () => {
        setText('');
        props.alert('success', 'All texts removed');
    }
    
    const [text, setText] = useState("Enter the Text to convert");
    return (
        <>
            <div className={`container my-${props.value}`} >
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3" >
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" />
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>
                    Copy Text
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveSpaces}>
                    Remove Extra Spaces
                </button>
                <button disabled={text.length === 0} className="btn btn-danger  mx-2 my-1" onClick={handleRemoveAll}>
                    Remove All Content
                </button>
                <h2>Your text summary</h2>
                <p><b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</b> words and <b>{text.length}</b> characters</p>
                <p><b>{0.008*text.split(' ').filter((element)=>{return element.length!==0}).length} </b> minutes reading</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to preview !!!"}</p>
            </div>
             
        </>
  );
}
