import { useEffect, useRef, useState } from "react";
import canvasImages from "./canvasImages";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Canvas({details}) {
    const {startIndex, numImages, duration, size, top, left, zIndex} = details;
    const [index, setIndex] = useState({value: startIndex}); //state to hold the current index of the image
    const canvasRef = useRef(null); //reference to the canvas element

    useGSAP(() => {
        gsap.to(index, {
            value: startIndex + numImages - 1, //total number of images counted from 0
            duration: duration, //duration of the animation    
            repeat: -1, //repeat the animation indefinitely
            ease: "linear", //smooth transition between values
            onUpdate: () => {
                setIndex({value: Math.round(index.value)}); //update the index state with the current value of the animation and round it to the nearest integer such that it doesn't take decimal values
            }, 
        });
    });

    useEffect(() => {
        const scale = window.devicePixelRatio; //get the device pixel ratio
        const canvas = canvasRef.current; //reference to the canvas element
        const ctx = canvas.getContext('2d'); //2d context for drawing on the canvas
            
        const image = new Image(); //create a new image element
        image.src = canvasImages[index.value]; //set the source of the image to the current index of the image
        
        image.onload = () => {
            canvas.width = canvas.offsetWidth * scale; //set the width of the canvas to the width of the image multiplied by the device pixel ratio
            canvas.height = canvas.offsetHeight * scale ; //set the height of the canvas to the height of the image multiplied by the device pixel ratio
            canvas.style.width = canvas.offsetWidth + "px"; //set the width of the canvas to the width of the image multiplied by the device pixel ratio
            canvas.style.height = canvas.offsetHeight + "px"; //set the height of the canvas to the height of the image multiplied by the device pixel ratio

            ctx.scale(scale, scale); //scale the canvas to the device pixel ratio
            ctx.drawImage(image, 0, 0, canvas.offsetWidth, canvas.offsetHeight); //draw the image on the canvas at position 0,0 with the width and height of the canvas
        };
    }, [index]);
    return (
    <canvas 
    ref ={canvasRef} 
    className="absolute"
    style={{
    width: `${size * 1.3}px`, 
    height: `${size * 1.3}px`,
    top: `${top}%`,
    left: `${left}%`,
    zIndex: `${zIndex}`,
}}
    id="canvas" 
    ></canvas>
    );
}

export default Canvas;
