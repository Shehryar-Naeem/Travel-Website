// import React, { useState } from "react";
// import "./Navbartwo.css";
// import Dropnav from "./Dropnav";
// import { NavLink } from "react-router-dom";
// const Navbartwo=()=>{
//     const [click,setClick] = useState(false);
//     const [dropClick,setDropClick]= useState(false);
//     const clickHandle=()=>{
//         setClick(!click)
//     }
//     const handle=()=>{
//         setDropClick(!dropClick)
//     }

//     return (
//         <>
//             <nav className="navbar">
//                 <div className="nav_logo">
//                     <p><span>N</span>av
//                     <span> B</span>ar</p>
//                 </div>
//                 <div className={click?"nav_list nav_show":"nav_list"}>
//                     <ul>
//                         <li><NavLink to="/">Home</NavLink></li>
//                         <li><NavLink to="/about">About</NavLink></li>
//                         <li ><NavLink to="/services">Services<i class="fas fa-sort-down " onClick={handle}></i></NavLink>
//                         <p className={dropClick? "show":"drop"}><Dropnav /></p>
//                         </li>
//                         <li><NavLink to="/contact">Contact</NavLink></li>
//                     </ul>
//                 </div>
//                 <div className="hamburger_icon" onClick={clickHandle}>
//                 <p>
//                 <i className={click? "fas fa-times":"fas fa-bars"}></i>
//                 </p>
//                 </div>
//             </nav>
//         </>
//     )
// }
// export default Navbartwo;