import Main from "./components/Main";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Main/> 
    </BrowserRouter>
  );
}

export default App;
