import './App.css'
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  const toggleMode = () => {
    console.log("toogle")
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextApp-Home(dark)'
    } else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextApp-Home'

    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title="MYAPP" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>} />
            <Route exact path="/" element={<Textform heading="My APP" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>

  );
}

export default App;
