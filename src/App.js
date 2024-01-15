// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setmode] = useState('light') 

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#1e1f24'
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    // JSX Fragment for returning only one component, compiled by babel to JS
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>
    </>

    
  );
}

export default App;
