
import React, { useState } from 'react'

export default function About(props) {

    let myStyle ={
        color: props.mode ==='dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'rgb(61 63 81)':'white'
        

    }
    // const [myStyle,setMyStyle] = useState({ //initial state
    //     color: 'black',
    //     backgroundColor:'white'
    // })
    
    // const [btnText, setbtnText] = useState("Enable Dark Mode")
    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'white'){
    //         setMyStyle({
    //             color:'black',
    //             backgroundColor:'white',
    //             border: '1px solid white'
    //         })
    //         setbtnText("Enable Dark Mode")
    //     }
    //     else{
    //         setMyStyle({
    //             color:'white',
    //             backgroundColor:'black'

    //         })
    //         setbtnText("Enable Light Mode")
    //     }
    // }
  return (
    <div className='container' >
    <h1 className='my-3' style={{color: props.mode ==='dark'?'white':'black'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>More Than Just Text Transformation</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                At TextUtils, our mission is to empower users with a versatile and user-friendly text utility. We believe in simplifying text manipulation, making it accessible to everyone, and enhancing the overall user experience.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>More Than Just Text Transformation</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                Beyond the basics of capitalization and lowercasing, TextUtils offers a suite of features. From character and word count metrics to a real-time reading time calculator, our app is designed to be your go-to tool for comprehensive text analysis and enhancement.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong> Seamless and Intuitive User Experience</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                With a focus on user-centric design, [Your App Name] ensures a seamless and intuitive experience. Whether you're a professional writer, student, or casual user, our app provides a clean interface and powerful functionality to meet your text manipulation needs effortlessly.
            </div>
            </div>
        </div>
        </div>
        {/* <div className='my-3 mx-2'>
        <button onClick={toggleStyle} type="button" class="btn btn-primary">{btnText}</button>
        </div> */}
    </div>
  )
}
