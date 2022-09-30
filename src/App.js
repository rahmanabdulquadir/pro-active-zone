import "./App.css";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import Questions from "./component/Questions/Questions";


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Questions></Questions>
    </div>
  );
}

export default App;
