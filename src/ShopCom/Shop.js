// import React from "react";
// import { data, shopData } from "./ShopData";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
// const PrevArrow = (prop) => {
//   const { className, onClick } = prop;
//   return (
//     <>
//       <div className={className} onClick={onClick}>
//         <ArrowBackIos style={{ color: "#fff" }} />
//       </div>
//     </>
//   );
// };
// const NextArrow = (prop) => {
//   const { className, onClick } = prop;
//   return (
//     <>
//       <div className={className} onClick={onClick}>
//         <ArrowForwardIos style={{ color: "#fff" }} />
//       </div>
//     </>
//   );
// };
// const Shop = () => {
//   return (
//     <>
//       <div style={{ margin: "4rem" }} className="shop" id="shop">
//         <h1 className="heading">Product Features</h1>
//         <Slider
//           autoplay={true}
//           autoplaySpeed={1000}
//           dots={true}
//           infinite={true}
//           prevArrow={<PrevArrow />}
//           nextArrow={<NextArrow />}
//           slidesToShow={3}
//           customPaging={(i) => {
//             return (
//               <>
//                 <div>
//                   <img
//                     src={data[i]}
//                     alt="paging"
//                     style={{
//                       width: "50px",
//                       height: "50px",
//                       objectFit: "cover",
//                       borderRadius: "10px",
//                     }}
//                   />
//                 </div>
//               </>
//             );
//           }}
//           dotsClass="slick-dots custom-indicator"
//         >
//           {shopData.map((cur) => {
//             return (
//               <>
//                 <div className="slide">
//                   <div className="image">
//                     <img src={cur.pic} alt="tour" />
//                     <div className="icons">
//                       <a href="#" className="fas fa-shopping-cart"></a>
//                       <a href="#" className="fas fa-eye"></a>
//                       <a href="#" className="fas fa-share"></a>
//                     </div>
//                   </div>
//                   <div className="content">
//                     <h3>{cur.title}</h3>
//                     <div className="price">{cur.price}</div>
//                     <div className="stars">
//                       <i className="fas fa-star"></i>
//                       <i className="fas fa-star"></i>
//                       <i className="fas fa-star"></i>
//                       <i className="fas fa-star"></i>
//                       <i className="fas fa-star-half-alt"></i>
//                     </div>
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//         </Slider>
//       </div>
//       {/* <section className="shop" id="shop">
//                 <h1 className="heading">Feature Products</h1>
//                 <div className="product_slider">
//                 <Slider></Slider>
//                     <div className="wrapper">
//                         {
//                             shopData.map((cur,index)=>{
//                                 return (
//                                     <>

//                                         <div className="slide">
//                                             <div className="image" key={index}>
//                                                 <img src={cur.pic} alt="tour"/>
//                                                 <div className="icons">
//                                                     <a href="#" className="fas fa-shopping-cart"></a>
//                                                     <a href="#" className="fas fa-eye"></a>
//                                                     <a href="#" className="fas fa-share"></a>
//                                                 </div>
//                                             </div>
//                                             <div className="content">
//                                                 <h3>{cur.title}</h3>
//                                                 <div className="price">{cur.price}</div>
//                                                 <div className="stars">
//                                                     <i className="fas fa-star"></i>
//                                                     <i className="fas fa-star"></i>
//                                                     <i className="fas fa-star"></i>
//                                                     <i className="fas fa-star"></i>
//                                                     <i className="fas fa-star-half-alt"></i>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                     </>
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </section> */}
//     </>
//   );
// };
// export default Shop;

import React from "react";
import Slider from "react-slick";
import {shopData} from "./ShopData"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
const PrevBtn=(prop)=>{
  const {className,onClick}=prop;
  return (
    <>
    <div className={className} onClick={onClick}  >
      <ArrowBackIos style={{color:"#fff",fontSize:"2rem"}}/>
    </div>
    </>
  )
}
const NextBtn=(prop)=>{
  const {className,onClick}=prop;
  return (
    <>
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{color:"#fff",fontSize:"2rem"}}/>
    </div>
    </>
  )
}
const Shop =()=>{
  const setting={
    slidesToShow:3,
    prevArrow:<PrevBtn/>,
    nextArrow:<NextBtn/>,
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
        breakpoint:1200,
        settings:{
          slidesToShow:4,
          centerMode:false
        }
      }
    ]
  }
  return(
    <>
      <section className="shop">
      <h1 style={{marginBottom:"1rem", textAlign:"center"}}>Shop Products</h1>
      <Slider
      {...setting}
      >
       {
        shopData.map((cur,index)=>{
          return (
            <>
            <div className="slide">
              <div key={index} className="images">
                <img src={cur.pic} style={{width:"100%",height:"30vh"}} alt="product Images"/>
                <div className="icons">
                    <a className="fas fa-shopping-cart"></a>
                    <a className="fas fa-eye"></a>
                    <a className="fas fa-share"></a>
                </div>
              </div>
              <div className="content">
                <h2>{cur.title}</h2>
                <p>{cur.price}</p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i> 
                  <i className="fas fa-star-half-alt"></i>
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
export default Shop;