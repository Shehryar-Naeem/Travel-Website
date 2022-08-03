import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BlogData } from "./BlogData";

const Blog = () => {
    const set={
        slidesToShow:3,
        centerMode:true,
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
          },
          {
            breakpoint:991,
            settings:{
              slidesToShow:3,
              centerMode:false
            }
          },
          {
            breakpoint:2500,
            settings:{
              slidesToShow:4,
              centerMode:false
            }
          }
        ]
      }
  return (
    <>
      <section className="blog">
        <h1 className="heading">Daily Posts</h1>
        <Slider
        {...set}
        >
          {BlogData.map((cur, index) => {
            return (
              <>
                <div className="slide">
                  <img
                    src={cur.pic}
                    alt="picture"
                    style={{
                      width: "100%",
                      height: "20rem",
                      objectFit: "fill",
                    }}
                  />
                  <div className="icons">
                    <a><i className="fas fa-calendar"></i> 21st May,2022</a>
                    <a><i className="fas fa-user"></i> By admin</a>
                  </div>
                  <h3>{cur.title}</h3>
                  <p>{cur.content}</p>
                  <button>Read More </button>
                </div>
              </>
            );
          })}
        </Slider>
      </section>
    </>
  );
};
export default Blog;
