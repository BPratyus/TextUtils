import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Cliacked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was Cliacked")
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleCcClick = ()=>{
        // console.log("Uppercase was Cliacked")
        let newText = text.replace(".","\n");
        setText(newText);
    }
    const handleClClick = ()=>{
        // console.log("Uppercase was Cliacked")
        let newText = '';
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("Onchange was Clicked")
        setText(event.target.value)
    }
    const [text,setText] = useState('');
// text is the variable. setText is the update fn
// array destructuring syntax, 
// need to use updateion function to update the (State) setText("") since we declared it in usestate
// State variables by default watched over by React, other variables wont change
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCcClick}>Convert to Paragraph</button>
        <button className="btn btn-primary mx-1" onClick={handleClClick}>Clear</button>
    </div>
    <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text Summary</h1>
    <p>{text.split(" ").length} and {text.length} charachters</p>
    <p>{0.008 * text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the Text Box to priview it above"}</p>
    </div>
    </>
  )
}
