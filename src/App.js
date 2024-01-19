// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light') ;
  const [alert, setAlert] = useState(null) ;
  const [darkMode, setdarkMode] = useState('default') ;

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
    setAlert(null)
    },1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor = '#1e1f24'
      showAlert("Dark mode has been Enabled","success")
      document.title ="TextUtils-Dark Mode"
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Dark mode has been Disabled","warning")
      document.title ="TextUtils-Light Mode"
    }
  }

  const ModeType =(bg,fg,txt)=>{
    if (darkMode==='default') {
      
    }
  }
  return (
    // JSX Fragment for returning only one component, compiled by babel to JS
    <>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        {/* <About/> */}
      </div>
    </>

    
  );
}

export default App;
