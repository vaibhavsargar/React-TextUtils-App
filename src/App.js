import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  let name = "Vaibhav";
  return (
    <>
      <Navbar title={"TextUtils"}/>
      {/* <Navbar /> */}
      <TextForm heading={"Enter the Text to Analyze"} />
      <About/>
    </>
  );
}

export default App;
