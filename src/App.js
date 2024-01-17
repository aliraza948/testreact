import './App.css';
import {NavBar} from './components/NavBar.js'
import Home from "./components/Home.js"
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
   </>
  );
}

export default App;
