import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";


function App() {

  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll();
  },[]);
  
  return (<>
    <div className="w-full relative min-h-screen ">
      {data[0].map((canvasdets, index) => ( //each row is an array of canvas details and here we are mapping over the first row
        <Canvas details={canvasdets} />
      ))} 
    </div>
    <div className="w-full relative min-h-screen ">
      {data[1].map((canvasdets, index) => ( //each row is an array of canvas details and here we are mapping over the second row
        <Canvas details={canvasdets} />
      ))} 
    </div>
    
  </>
  );
}

export default App;

