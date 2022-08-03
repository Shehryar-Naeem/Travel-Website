// import React, { useState } from "react";
// import {NavLink} from "react-router-dom";
// import DropDown from "./DropDwon";
// import {Button} from "./Button";
// import "./NavBar.css"

// const NavBar =()=>{
//     const [click, setClick] = useState(false);
//     const [dropdown,setDropDown] = useState(false);
//     const handleClick=()=>{
//         setClick(!click)
//     }
//     const closeMobileMenu =()=>{
//         setClick(false)
//     }
//     const onMouseEnter =()=>{
//         if(window.innerWidth<960){
//             setDropDown(false)
//         }else{
//             setDropDown(true)
//         }
//     }
//     const onMouseLeave =()=>{
//         if(window.innerWidth<960){
//             setDropDown(false)
//         }else{
//             setDropDown(false)
//         }
//     }
//     return (
//         <>
//             <nav className="navbar">
//                 <p className="navbar_logo"><NavLink to="/">NavLogo</NavLink></p>
//                 <div className="hamburger_icon" onClick={handleClick}>
//                     <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
//                 </div>
//                 <ul className={click ? "nav_menu active" : "nav_menu"}>
//                     <li className="nav_item"><NavLink to ="/" onClick={closeMobileMenu}>Home</NavLink></li>
//                     <li className="nav_item"><NavLink to ="/about" onClick={closeMobileMenu}>About</NavLink></li>
//                     <li className="nav_item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}><NavLink to ="/services" onClick={closeMobileMenu}>Services<i className="fas fa-caret-down"/></NavLink>
//                     {dropdown && <DropDown/>}
//                     </li>
//                     <li className="nav_item"><NavLink to ="/contact" onClick={closeMobileMenu}>Contact</NavLink></li>
//                     <li className="nav_links_mobile"><NavLink to ="/sign-up" onClick={closeMobileMenu}>Sign-up</NavLink></li>
//                 </ul>
//                 <Button/>
//             </nav>
//         </>
//     )
// }
// export default NavBar;