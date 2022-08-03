import React from "react"
import Slider from "react-slick"
import { ReviewData } from "./ReviewData"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const Review =()=>{
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
            <section className="review">
                <h1 className="heading">Customer Review</h1>
                <Slider
                {...set}
                >
                    {
                        ReviewData.map((cur,index)=>{
                            return (
                                <>
                                    <div className="slide" key={index} style={{margin:"0 1rem"}}>
                                        <p className="text">{cur.description}</p>
                                        <div className="user">
                                            <img src={cur.pic} alt="images" style={{width:"7rem",height:"7rem",borderRadius:"50%",objectFit:"fill"}}/>
                                            <div className="info">
                                                <h3>{cur.name}</h3>
                                                <p>{cur.designationL}</p>
                                            </div>
                                        </div>
                                    </div> 
                                </>
                            )
                        })
                    }
                </Slider>

            </section>
        </>
    )
}
export default Review