import React from "react";
import { SliderData } from "../HomeSection.js/SliderData";
const Packages = () => {
  return (
    <>
      <section className="package">
        <h1 className="heading">Popular Packages</h1>
        <div className="box_container">
          {SliderData.map((cur,index) => {
            return (
              <>
                <div className="box" key={index}>
                    <div className="images">
                        <img src={cur.pic} alt="pakeges"/>
                    </div>
                    <div className="content">
                        <h3>{cur.title}</h3>
                        <p>{cur.subtitle}</p>
                        <div className="price">
                            {cur.price}
                        </div>
                        <button className="btn">Explore Now</button>
                    </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Packages;
