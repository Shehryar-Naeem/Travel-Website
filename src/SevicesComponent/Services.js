import React from "react";
import { ServicesData } from "./ServicesData";

const Services = () => {
  return (
    <>
      <section className="services">
        <h1 className="heading">Services</h1>
        <div className="container">
          {ServicesData.map((cur,index) => {
            return (
              <>
            
                <div className="box" key={index}>
                <div className="images  ">
                  <img src={cur.pic} alt="services"/>
                </div>
                    <h3>{cur.title}</h3>
                    <p className="title">{cur.discription}</p>
                    <p className="price">{cur.price}</p>
                    <button className="btn">Read More</button>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
