import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {useState} from "react";


function App() {

  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'grey';
    document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#343a40';
    }
  }
  

  return (
    <>
      <Navbar title={"TextUtils"} mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar /> */}
      <TextForm heading={"Enter the Text to Analyze"} value={5} mode={mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;
