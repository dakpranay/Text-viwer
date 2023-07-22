import React, { useState } from 'react';



export default function Textform(props) {

    const [text, setText] = useState("");
    const a=text.split(" ").length

    const handelUpClick = ()=>{
        setText(text.toUpperCase())
    }

    const handelloClick = ()=>{
        setText(text.toLowerCase())
    }

    const handelOnChange=(event)=>{
        console.log("handel on change clicked")
        setText(event.target.value)
    }

    return (
        <>
        <div className="container">
        <h1>{props.heading}</h1>
            <div className="form-group" >
                <textarea className="form-control" value={text} onChange={handelOnChange} id="mybox" rows="10"></textarea>
            </div >
            <button className="btn btn-primary mx-3" onClick={handelUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary" onClick={handelloClick}>Convert to lowercase</button>
        </div>
        <div className="container my-3">
            <h1>Your text Summery</h1>
            <p>{a-1} words, {text.length} characters</p>
            <p>{(0.008*a).toFixed(3)} Minutes rquired to read the text</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
