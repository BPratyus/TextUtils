import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Cliacked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!","success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was Cliacked")
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!","success");
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
        props.showAlert("Cleared!","info");
    }

    const handleCopy = ()=>{
        // console.log("Uppercase was Cliacked")
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied!","success");
        
    }
    const handleOnChange = (event)=>{
        // console.log("Onchange was Clicked")
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
       <h1 className='mb-4'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" style={{backgroundColor:props.mode==='dark'?'#5c5b5b':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={handleCcClick}>Convert to Paragraph</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={handleClClick}>Clear</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}onClick={handleCopy}>Copy</button>
    </div>
    <div className="container my-5" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text Summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
