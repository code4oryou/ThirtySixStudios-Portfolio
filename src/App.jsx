import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from "react";


function App() {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (<>
    <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
      {/* {data[0].map((canvasdets, index) => ( //each row is an array of canvas details and here we are mapping over the first row
        <Canvas details={canvasdets} />
      ))} */}
      <div className="w-full h-screen text-white">
        <nav className="top-0 left-0 w-full p-8 flex justify-between z-50">
          <div className="brand text-2xl font-md">thirtysixstudios</div>
          <div className="links flex gap-10">
            {[
              "What we do",
              "Who we are",
              "How we give back",
              "Talk to us",
            ].map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase()}`}
                className="text-md hover:text-gray-300"
              >
                {link}
              </a>
            ))}
          </div>
        </nav>
        <div className="textcontainer w-full px-[20%]">
          <div className="text w-[65%]">
            <h3 className="text-4xl leading-[1.3]">
              At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.
            </h3>
            <p className="text-md w-[80%] mt-10" >We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.</p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default App;

