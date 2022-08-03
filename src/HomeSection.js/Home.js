import React, { useState } from "react";
// import "../scss/HomeSection/_home.scss"
import { SliderData } from "./SliderData";
const len = SliderData.length - 1;
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <section id="home" className="home">
        <div className="home_slider">
          <div className="wrapper">
            {SliderData.map((curr, index) => {
              return (
                <>
                  <div
                    className={
                      index === activeIndex ? "slide active" : "inactive"
                    }
                    key={index}
                  >
                    <span
                      className="fas fa-angle-left"
                      id="pre"
                      onClick={() =>
                        setActiveIndex(activeIndex > 0 ? activeIndex - 1 : len)
                      }
                    ></span>
                    <span
                      className="fas fa-angle-right"
                      id="next"
                      onClick={() =>
                        setActiveIndex(activeIndex < len ? activeIndex + 1 : 0)
                      }
                    ></span>
                    <div  
                      className={curr.classSet}
                      style={{ background: `url(${curr.pic}) no-repeat`}}
                    >
                      <div className="content">
                        <span>{curr.title}</span>
                        <h1>{curr.subtitle}</h1>
                        <p> {curr.content}</p>
                        <a className="btn" href="#">
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
