import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert('Converted to Uppercase', 'success')
  }
  const handleClClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = ' '
    setText(newText)
    props.showAlert('Text cleared!', 'success')
  }
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text)
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert('Converted to lowercase!', 'success')
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text)
    window.speechSynthesis.speak(msg)
    const toggle = document.getElementById('toggle')

    if (toggle.textContent === 'Speak') {
      props.showAlert('Speaking written text!', 'success')
      toggle.innerHTML = 'Stop'
    } else {
      toggle.innerHTML = 'Speak'
      if ((toggle.innerHTML = 'Speak')) {
        window.speechSynthesis.cancel()
      }
    }
  }
  const handleCopy = () => {
    console.log('I am copy')
    var text = document.getElementById('mybox')
    text.select()
    text.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(text.value)
    props.showAlert('Copied to Clipboard!', 'success')
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(' '))
    props.showAlert('Extra spaces removed!', 'success')
  }

  const handleOnchange = (event) => {
    // console.log("On change")
    setText(event.target.value)
  }
  const [text, setText] = useState('')
  return (
    <>
      <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1> {props.heading} </h1>{' '}
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnchange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            id="mybox"
            rows="8"
          >
          
          </textarea>{' '}
        </div>{' '}
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          {' '}
          Convert to Uppercase{' '}
        </button>{' '}
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          {' '}
          Convert to Lowercase{' '}
        </button>{' '}
        <button className="btn btn-primary mx-1 my-1" onClick={handleClClick}>
          {' '}
          Clear Text{' '}
        </button>{' '}
        <buttton
          type="submit"
          onClick={speak}
          className="btn btn-primary mx-2 my-2"
          id="toggle"
        >
          {' '}
          Speak{' '}
        </buttton>{' '}
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          {' '}
          Copy Text{' '}
        </button>{' '}
        <button
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          {' '}
          Remove extra spaces{' '}
        </button>{' '}
      </div>{' '}
      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
      >
        <h2> Your text summary </h2>{' '}
        <p>
          {' '}
          {
            text.split(' ').filter((element) => {
              return element.length !== 0
            }).length
          }
          words and {text.length}
          characters
        </p>
        <p>
          
          {0.008 * text.split(' ').length.filter((element) => {
              return element.length !== 0}.length}
          Minutes read
        </p>{' '}
        <h2> Preview </h2>{' '}
        <p>
          {text.length > 0
            ? text
            : 'Enter something in the textbox above to preview it here'}{' '}
        </p>{' '}
      </div>{' '}
    </>
  )
}
