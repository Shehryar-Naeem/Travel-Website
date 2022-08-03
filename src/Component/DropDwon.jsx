// import React, { useState } from "react";
// import {NavLink} from "react-router-dom"
// import { MenuItems } from "./MenuItems";
// import "./DropDown.css";

// const DropDown =()=>{
//     const [click,setClick] = useState(false);
//     const handleClick = ()=>{
//         setClick(!click);
//     }
//     return (
//         <>
//             <ul onClick={handleClick} className={click ? 'dropdown_menu clicked': 'dropdown_menu'}>
//                 {MenuItems.map((item,index)=>{
//                     return (
//                         <li key={index}>
//                             <NavLink className={item.cName} to={item.path} onClick={()=> {setClick(false)}}>{item.title}</NavLink>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </>
//     )
// }
// export default DropDown