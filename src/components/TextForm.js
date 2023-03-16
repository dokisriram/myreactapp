import React, { useState } from "react";

export default function TexForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    // console.log("Clear was clicked" + text);
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");
  }

  const removeExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces has been removed", "success");
  }

  const handleOnChange = (event) => {
    // console.log('On change');
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            value={text} 
            rows="8" style={{backgroundColor: props.mode==='dark' ? '#042743' : 'white', color: props.mode==='dark' ? 'white' : '#042743'}}
          ></textarea>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2" onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-4" style={{color: props.mode==='dark' ? 'white' : '#042743'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} Words, {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
}
