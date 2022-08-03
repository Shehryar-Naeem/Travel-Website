import React from "react";
import Slider from "react-slick";
import post1 from "../Images/post1.jpg";
import post2 from "../Images/post2.jpg";
import post3 from "../Images/post3.jpg";
import post4 from "../Images/post4.jpg";
import post5 from "../Images/post5.jpg";
import post6 from "../Images/post6.jpg";
const data = [post1, post2, post3, post4, post5, post6];

const Companies = () => {
    const set={
        slidesToShow:4,
        centerMode:false,
        responsive:[
            {
                breakpoint:556,
                settings:{
                    slidesToShow:1,
                    centerMode:false
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:2,
                    centerMode:false
                }
            }
        ]
    }
  return (
    <>
      <section className="clients">
        <Slider
        
        {...set}>
          {data.map((cur, index) => {
            return (
              <>
                <div key={index} style={{display:"flex", justifyContent:"space-evenly", margin: "0 1rem"}} >
                  <img
                    src={cur}
                    style={{
                      width: "20rem",
                      height: "20rem",
                      objectFit: "fill",
                      borderRadius:"50%"
                    }}
                  />
                </div>
              </>
            );
          })}
        </Slider>
      </section>
    </>
  );
};
export default Companies;
