import React,{useState} from "react";
import About from "./Components/About";
import Alert from "./Components/Alert";
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {

const [alert, setAlert] = useState(null)

const showAlert = (message, type) => {
  setAlert({msg: message, type: type})

  setTimeout(() => {
    setAlert(null)
  }, 2000);
}


  return (
    <>
    <BrowserRouter>
      <NavBar title='TextUtils' about='About'/>
      <Alert alert = {alert} />

      <Routes>
          <Route exact path='/' element = {<TextForm heading="enter the text to analyze" alert={showAlert} />}></Route>
          <Route exact path='/about' element={<About />}></Route>
      </Routes>  
    </BrowserRouter>
    </>
  );
};

export default App;

