import { useState } from "react";
import Main from "./components/Main";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

function App() {
<<<<<<< HEAD
  const [screenWidth, setScreenWidth] = useState();

  // const css = screenWidth > 768 ? "./App.css" : "./Mobile.css";

  window.addEventListener("resize", function () {
=======
  const [screenWidth, setScreenWidth] = useState(0)
  
 
  const css = screenWidth > 768? './App.css' : './Mobile.css'
  window.addEventListener("resize", function() {
>>>>>>> dd927079a4015ef23f6c3d99073163fe0772c910
    setScreenWidth(window.innerWidth);
  });

  return (
    <BrowserRouter>
      {screenWidth}
      <Main />
    </BrowserRouter>
  );
}

export default App;
