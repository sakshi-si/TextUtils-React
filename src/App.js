import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import './App.css'
import { useState } from 'react'
import Alert from './components/Alert'
import About from './components/About';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null)
      },
      1500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been enabled', 'success')
      document.title='TextUtils - Dark Mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled', 'success')
      document.title='TextUtils - light Mode'
    }
  }

  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={toggleMode}
      />{' '}
      <Alert alert={alert} />
      <div className="container my-3">
      <Switch>
     <Route exact path='/about'>
     <About mode={mode}/>
    </Route>
   
    <Route exact path="/">
    <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
 </Route>
 </Switch>
      </div>

     </Router> 
         </>
  )
}

export default App
