import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React,{ useState } from 'react';


function App() {

  const [mode,setMode]=useState('light')

  const toggleMode = () =>{
    console.log("toogle")
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#042743'
    }else{
      setMode("light")
      document.body.style.backgroundColor='white'
    }
  }

  return (
    <>
      <Navbar title="MYAPP" mode={mode}  toggleMode={toggleMode}/>
      <div className="container">
        <Textform heading="My APP" mode={mode}/>
      </div>
      {/* <About/> */}

    </>
  );
}



export default App;
