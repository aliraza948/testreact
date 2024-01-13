import './App.css';
import {MsgChecker,AboutUs,ContactUs,} from './components/NavBar.js'
import {
  Routes,
  HashRouter,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
  

  <HashRouter>
        <nav className="py-5 bg-zinc-900 flex justify-between">
        <div className="flex"><input type="text" className='ml-4 rounded-l-sm p-1'/><button type='button' className='text-black bg-white rounded-r-sm shadow-inner shadow-black px-4'>Press it</button> </div>
        
        <div className='flex justify-end'>
        <ul className="flex space-x-10 text-slate-100 pr-4">
        
        <a href="/">Home</a>
        <a href="/contact"> contact</a>
        <a href="/about"> about</a>
        
        </ul>
        
           
        </div>
       </nav>
       <Routes>
        <Route path="/" element={<MsgChecker/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        </Routes>
       </HashRouter>
   </>
  );
}

export default App;
