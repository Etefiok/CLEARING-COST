import React from "react";
import "./Slider.css";
import { sliderData } from "./Slider-data";
import {useState, useEffect} from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 
"react-icons/ai";



const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slidelength = sliderData.length;
// SlideLength = 1 2 3


const autoScroll = true;
let slideInterval;
let intervalTime = 10000;

    const nextslide = () => {
        setCurrentSlide(currentSlide === slidelength -1 ? 0 : currentSlide + 1);
    };


    const prevslide = () => {
        setCurrentSlide(currentSlide === 0 ? slidelength - 1: currentSlide - 1 );
    };


    function auto() {
        slideInterval = setInterval(nextslide, intervalTime )
    }


    useEffect(() =>{
        setCurrentSlide(0)
    }, []);


    useEffect(() =>{
        if (autoScroll) {
            auto();
        }
        return () =>clearInterval (slideInterval);
    }, [currentSlide]);



    const handleButtonClickIndex0 = () => {
        window.location.href = "tel:+2347064901413";
    };
    
 
    return (
        <div className="slider">
            <AiOutlineArrowLeft className='arrow prev' onClick={prevslide}/>
            <AiOutlineArrowRight className='arrow next' onClick={nextslide} />

            {sliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                                <img src={slide.image} alt="" />

                               

                                <div className="content">
                                    <h2>{slide.heading}</h2>
                                    <p>{slide.desc}</p>
                                    <hr />
                                   
                                    <button className="btn btn-primary" onClick={handleButtonClickIndex0}>Get Started</button>
                               
                                </div>
                            </>
                        )}

                    </div>
                )
            })}
        </div>
    )
}

export default Slider