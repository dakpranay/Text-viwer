import React, { useState } from 'react';



export default function Textform(props) {

    const [text, setText] = useState("");
    const a=text.split(" ").length

    const handelUpClick = ()=>{
        setText(text.toUpperCase())
    }

    const handelClClick = ()=>{
        setText("")
    }

    const handlecopytext = ()=>{
        navigator.clipboard.writeText(text)
        
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
        <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
            <div className="form-group" >
                <textarea className="form-control" value={text} onChange={handelOnChange} style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='dark'?'white':'#042743'}} id="mybox" rows="10"></textarea>
            </div >
            <button className="btn btn-primary mx-3" onClick={handelUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary mx-3" onClick={handelloClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-3" onClick={handelClClick}>Clear TextArea</button>
            <button className="btn btn-primary " onClick={handlecopytext}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>Your text Summery</h1>
            <p>{a-1} words, {text.length} characters</p>
            <p>{(0.008*(a-1)).toFixed(3)} Minutes rquired to read the text</p>
            <h2>Preview</h2>
            <p>{(text.length>0)?text:"Enter some text to preview here"}</p>
            <p></p>
        </div>
        </>
    )
}
