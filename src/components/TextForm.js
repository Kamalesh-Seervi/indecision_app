import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = (event) => {
        setText(text.toUpperCase());
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState();
console.log(text)
  return (
    <div> 
    <h3>{props.heading}</h3>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows= "g"></ textarea> 
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button> 
    </div>
  )
}
