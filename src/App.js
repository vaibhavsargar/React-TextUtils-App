import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  let name = "Vaibhav";
  return (
    <>
      <Navbar title={"TextUtils"}/>
      {/* <Navbar /> */}
      <TextForm heading={"Enter the Text to Analyze"} />
    </>
  );
}

export default App;
