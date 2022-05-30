import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {useState} from "react";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {  
    setAlert(null);
  }, 1500);
  }
  

  const toggleMode = () => {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    document.body.style.color = 'white';
    showAlert('success', 'Dark mode has been enabled');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#343a40';
      showAlert('warning', 'Light mode has been enabled');
    }
  }
  

  return (
    <>
      <Navbar title={"TextUtils"}  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <TextForm heading={"Enter the Text to Analyze"} value={5} mode={mode} alert={showAlert}/>
      {/* <About/> */}
    </>
  );
}

export default App;
