// import React,{useState} from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// const NavBar =()=>{
//     const [click,setClick] = useState(false);
//     const handleClick =()=>{
//         setClick(!click)
//     }
//     return (
//         <>
//             <nav className="navbar">
//                 <div className="navbar_logo">
//                 <p>
//                 <span>N</span>av  
//                 <span> B</span>ar</p>
//                 </div>
//                 <div className={click ?"nav_links mobile_links": "nav_links"}>
//                     <ul>
//                         <li><NavLink to="/">Home</NavLink></li>
//                         <li><NavLink to="/about">About</NavLink></li>
//                         <li><NavLink to="/services">Services</NavLink></li>
//                         <li><NavLink to="/contact">Contact</NavLink></li>
//                     </ul>
//                 </div>
//                 <div className="social_logo">
//                     <ul>
//                         <li><NavLink to="/facebook"><i class="fab fa-facebook-square"></i></NavLink></li>
//                         <li><NavLink to="/instagram"><i class="fab fa-instagram"></i></NavLink></li>
//                         <li><NavLink to="/whatsapp"><i class="fab fa-whatsapp"></i></NavLink></li>
//                     </ul>
                    
//                 </div>
//                 <div className="hamburger_icon" onClick={handleClick}><p><i className={click ? 'fas fa-times':"fas fa-bars"}></i></p></div>
//             </nav>
//         </>
//     )
// }
// export default NavBar;