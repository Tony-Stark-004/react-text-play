import React, {useState} from 'react'
import PropTypes from 'prop-types'

const TextForm = (props) => {

  const [text, setText] = useState('')

  const changeHandler = (event) => {
    setText(event.target.value)
  }

  function clickHandler() {
      console.log(text.toUpperCase());
      setText(text.toLocaleUpperCase())

      // let newText = text.toLocaleUpperCase()
      //  setText(newText.toLocaleUpperCase()) 
  }

// extra spaces
const clickSpacesHandler = () => {
   let newText = text.split(/[ ] + /)
   setText(newText.join(" "))
}


// dark mode
const [mode, setMode] = useState({color: '#212529', backgroundColor: 'white'})
const [btnText, setBtnText] = useState('enable dark mode')

 const clickDarkModeHandler = () => {
    
      if(mode.color === '#212529') {
          setMode({color: 'white', backgroundColor: '#212529'})
          setBtnText('disable mode')
          props.alert('dark mode', 'success')
      }

      else {
        setMode({color: '#212529', backgroundColor: 'white'})
        setBtnText('enable dark mode')
        props.alert('light mode', 'success')
      }
    

 }


  return (
    <>
      <div className="mb-3 container">
        <label htmlFor="myBox" className="form-label">{props.heading}</label>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={changeHandler} style={mode}></textarea> <br />
        <button disabled={text.length===0} className="btn btn-outline-success" type="submit" onClick={clickHandler}>convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-outline-success mx-2" type="submit" onClick={clickSpacesHandler}>remove spaces</button>
        <button className="btn btn-outline-success" type="submit" onClick={clickDarkModeHandler}>{btnText}</button>
      </div> 

      <div className="container">
        <h3>text summary</h3>
        <p className='fs-6'>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words {text.length} characters</p>
        <p className='fs-6'>{0.008*text.split(" ").filter((element) => {return element.length!==0}).length} minutes read</p>
      </div>  

     <div className="container">
        <h2>Preview</h2>
        <p>{text}</p>
     </div>
    </>
  )
}

export default TextForm

TextForm.propTypes = {
  heading: PropTypes.string
}

TextForm.defaultProps = {
  heading: "Enter Text"
}