import React, { useEffect, useState } from "react";
import SlideContent from "./SlideContent";
import ImageSlection  from "./ImageSlection";
import Arrow from "./Arrow";
import Dot from "./Dot";
import "./slider.css";

const len = ImageSlection.length-1;
const Slider=()=>{
    const [activeIndex,setActiveIndex]= useState(0);
    useEffect(()=>{
        const interval=setInterval(()=>{
            setActiveIndex(activeIndex===len ? 0 :activeIndex+1);
        },5000);
        return ()=>{
            clearInterval(interval)
        }
    },[activeIndex])
    return (
        <>
            <div className="slider_container">
                <SlideContent activeIndex={activeIndex} ImageSlection={ImageSlection}/>
                <Arrow prevSlide={()=>{
                    return setActiveIndex(activeIndex< 1?  len: activeIndex-1)
                }}/>
                <Arrow nextSlide={()=>{
                    return setActiveIndex(activeIndex === len ? 0: activeIndex+1)
                }}/>
                <Dot 
                activeIndex ={activeIndex} 
                ImageSlection={ImageSlection} 
                onclick={(activeIndex)=>{
                    return setActiveIndex(activeIndex);
                }}/>
            </div>
        </>
    )
}

export default Slider;