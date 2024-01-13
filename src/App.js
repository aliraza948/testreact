import './App.css';
import {MsgChecker,AboutUs,ContactUs,} from './components/NavBar.js'
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
  

       {/*<BrowserRouter>
        <nav className="py-5 bg-zinc-900 flex justify-between">
        <div className="flex"><input type="text" className='ml-4 rounded-l-sm p-1'/><button type='button' className='text-black bg-white rounded-r-sm shadow-inner shadow-black px-4'>Press it</button> </div>
        
        <div className='flex justify-end'>
        <ul className="flex space-x-10 text-slate-100 pr-4">
            
        <Link to="">Home</Link>
        <Link to="">Contact</Link>
        <Link to="">Contact Us</Link></ul>
           
        </div>
       </nav>
       <Routes>
        <Route path="/">
          <MsgChecker heading="good"/>
        </Route>
        <Route path="/About">
          <AboutUs/>
        </Route>
        <Route path="/ContactUs">
          <ContactUs/>
        </Route>
       </Routes>
  </BrowserRouter> */}
 <b>fd</b>
  <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<MsgChecker heading="Ali"/>} />
          <Route path="contact" element={<ContactUs/>} />
          <Route path="about" element={<AboutUs/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  
   </>
  );
}

export default App;
