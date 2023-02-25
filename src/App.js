import React, { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./CustomCursor"; 
import Header from "./components/Header";
import Featured from "./components/Featured";
import About from "./components/About";
import Gallery from "./components/Gallery";
 
import "./styles/home.scss";
import useLocoScroll from "./hooks/useLocoScroll";

function App() {

  const [preloader, setPreloader] = useState(true);

  useLocoScroll(!preloader);

const [timer, setTimer] = useState(2);

const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  
useEffect(() => {
  if (timer === 0) {
    clear();
  }
}, [timer]);


  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
  
    }, 1000);
  },[]);





  return (
   <>
  
        <CustomCursor />

      {preloader ? (<div className='loader-wrapper absolute'>
          <h1>Flirty Flowers</h1>
          <h2>Rio dehasfo</h2>
        </div> ) :
         
       ( <div className="main-container" id="main-container"
       
       data-scroll-container>     
           <Navbar />
           <Header />
           <Featured />
           <About />
           <Gallery />
           <Footer />
       </div>)}

        
   </>
  );
}

export default App;


 