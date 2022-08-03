// import React from "react";
// import Home from "./Home";
// import Contact from "./Contact";
// import About from "./About";
// import Error from "./Error";    
// import Menu from "./Menu";
// import Services from "./Services"
// import { Switch,Route } from "react-router-dom";

// const Router =()=>{
//     return (
//         <>
//             <Menu/>
//             <Switch>
//                 <Route exact path="/" component={()=>{
//                     return <Home name="Home us"/>
//                 }}/>
//                 <Route path="/contact" render={()=>{
//                     return <Contact name="Contact us for contact"/>
//                 }}/>
//                 <Route path="/about/:fname/:lname" component={About}/>
//                 <Route path="/services/:bname/:faname" render={
//                     ()=>{
//                         return <Services name="Sevices page"/>
//                     }}/>
//                 <Route component={Error}/>
//             </Switch>
//         </>
//     )
// }

// export default Router;
 
// import React from "react";
// import Home from "./Home";
// import Contact from "./Contact";
// import About from "./About";
// import Services from "./Services";
// import Error from "./Error";
// import {Switch,Route} from "react-router-dom"
// import Menu from "./Menu";

// const Router=()=>{
//     return (
//         <>
//         <Menu/>
//         <Switch>
//             <Route exact path="/" render={()=>{
//                 return <Home name="Home page"/>
//             }}/>
//             <Route path="/about" render={()=>{
//                 return <About name="About page"/>
//             }}/>
//             <Route path="/services" render={()=>{
//                 return <Services name="Services page"/>
//             }}/>
//             <Route path="/contact" render={()=>{
//                 return <Contact name="Contact Page"/>
//             }}/>
//             <Route render={()=>{
//                 return <Error name="404 page"/>
//             }}/>
//         </Switch>
//         </>
//     )
// }
// export default Router;  

// import React from "react";
// import Home from "./Home";
// import About from "./About";
// import Services from "./Services";
// import Contact from "./Contact";
// import Navbar from "./Navbar";
// import Side from "./Side";
// import { Switch,Route } from "react-router-dom";

// const Router =()=>{
//     return (
//         <>
//         <div className="nav-container">
//             <Side/>
//             <Navbar/>
//         </div>
        
//         <Switch>
//             <Route exact path="/" component={Home}/>
//             <Route path="/about" component={About}/>
//             <Route path="/services" component={Services}/>
//             <Route path="/contact" component={Contact}/>
//         </Switch>
//         </>
//     )
// }

// export default Router;