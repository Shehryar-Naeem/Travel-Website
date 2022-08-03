// import React, { createContext } from "react";
// import Component1 from "./Component1"



// const firstName =  createContext();
// const lastName = createContext()
// const fatherName = createContext();
// const App =()=>{
    //     return (
//     <>
//         <firstName.Provider value={"Shehryar"}>
//             <lastName.Provider value={"Naeem"}>
//                 <fatherName.Provider value={"Naeem shoukat"}>
//                     <Component1 />
//                 </fatherName.Provider>
//             </lastName.Provider>
//         </firstName.Provider>
//     </>
//     );
// }
// export default App;
// export { firstName, lastName, fatherName };


// import React, { useState } from "react";

// const App =()=>{
    //     const [text,setText]= useState()
    //     const clickMe =(event)=>{
        //         setText(event.target.value)
        //     }
//     return (
    //         <>
    //             <p>{text}</p>
    //             <input type="text"  onChange={clickMe} placeholder="Enter your name" value={text}/>
    //         </>
    //     )
    // }
    
    // export default App;
    
    // import React, { useEffect, useState } from "react";
    
    // const App =()=>{
        //     const [incre,setIncre] = useState(0)
        //     useEffect(()=>{
            //         alert("hi")
            //     },[])
            
            //     const click =()=>{
                //         setIncre(incre+1) 

                
//     }

//     return (
    //         <>
    //             <p>{incre}</p>
    //             <button onClick={click}>click me</button>
    //         </>
    //     )
    // }

    // export default App;
    
    
    // import React, { useEffect, useState } from "react"

// const App =()=>{
//     const [title,showTitle] = useState(0);
    
//     const click =()=>{
    //         showTitle(title+1)
    //     }
    //     useEffect(()=>{
        //         document.title=`you click ${title} time`;
        //     })
        //     return (
            //         <>
            //             <button onClick={click}>click Me</button>
            //         </>
            //     )
            // }
            
            // export default App
            
            // import React, { useEffect, useState } from "react";
            // import axios from "axios"
            
            
            // const App =()=>{
                //     const [opt,ShowOpt]=useState("selectOption");
//     const [name,showName]=useState();
//     const [moves,showMove]=useState();
//     const show =(event)=>{
    //         ShowOpt(event.target.value)
    //     }
    //     useEffect(()=>{
        //         async function getData(){
            //             const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${opt}`)
            //             showName(res.data.name)
            //             showMove(res.data.moves.length)
            //         }
            //         getData()
            //     })
            //     return (
                //         <>
                //             <div>
                //                 <p>you Select the <span style={{color:"red"}}> {opt} </span> </p>
                //                 <p>My name is <span style={{color:"red"}}> {name} </span> </p>
                //                 <p>i have <span style={{color:"red"}}> {moves} </span> moves</p>
                //                 <select value={opt} onChange={show}>
                //                     <option value="1">1</option>
                //                     <option value="25">25</option>
                //                     <option value="3">3</option>
                //                     <option value="4">4</option>
                //                     <option value="5">5</option>
                //                     <option value="6">6</option>
                //                     <option value="7">7</option>
                //                     <option value="8">8</option>
                //                     <option value="9">9</option>
//                     <option value="10">10</option>
//                 </select>
//             </div>
//             <a href="https://www.facebook.com/">facebook</a>
//             <a href="https://www.youtube.com/">YouTube</a>
//         </>
//     )

// }
// export default App;


// ********************************* New Part ************************************

// import React from "react";
// import Home from "./Home";
// import Contact from "./Contact";
// import About from "./About";
// import Error from "./Error";
// import Menu from "./Menu";
// import { BrowserRouter,Route,Switch } from "react-router-dom";

// const App =()=>{
    //     return (
        //         <>
        //             <BrowserRouter>
        //             <Switch>
//              <Menu/>
//                 <Route exact path="/" component={Home}/>
//                 <Route path="/about" component={About}/>
//                 <Route path="/contact" component={Contact}/>
//                 <Route component={Error}/>
//             </Switch>
//             </BrowserRouter>
//         </>
//     )
// }

// export default App;


// import React from "react";
// import Router from "./Router";
// import { BrowserRouter } from "react-router-dom";

// const App =()=>{
    //     return (
        //         <>
        //             <BrowserRouter>
        //                 <Router/>
        //             </BrowserRouter>
        //         </>
//     )
// }
// export default App;

// import React from "react";
// import Router from "./Router"
// import { BrowserRouter } from "react-router-dom";

// const App =()=>{
    //     return (
        //         <>
        //             <BrowserRouter>
        //                 <Router/>
        //             </BrowserRouter>
        //         </>
        //     )
// }
// export default App;


// ******************************** bigneer project ******************************



// import React from "react";
// import Menu from "./Menu";


// const App=()=>{
    //     return (
        //         <>
//         <BrowserRouter>
//             <Menu/>
//         </BrowserRouter>
//         </>
//     )
// }

// export default App;

// import React from "react";
// // import Hoster from "./NewNav/Hoster"; 
// import Navbartwo from "./NewNav/Navbartwo";
// import { BrowserRouter } from "react-router-dom";

// const App =()=>{
    //     return (
        //     <>
        //         <BrowserRouter>
        //             <Navbartwo/>    
        //         </BrowserRouter>
        
        //     </>
        //     ) 
        // }
        // export default App;
        
        // searching content 
        // import React from "react"
        // import Search from "./Search/Search"
        
        // const App =()=>{
            //     return (
                //         <>
                //             <Search/>
                //         </>
                //     )
                // }
                // export default App
                
                
                
                //slider one
                
                // import React from "react";
                // import ImageSlide from "./ImageSlider/ImageSlide";
                // import SliderData from "./ImageSlider/SliderData";
                
                
                // const App=()=>{
//     return (
    //         <>
//             <ImageSlide slides={SliderData}/>
//         </>
//     );
// }

// export default App;


//slider two

// import React from "react";
// import Slider from "./AutoMoveAbleSlider/Slider";

// const App=()=>{
    //     return (
        //         <>
        //             <Slider/>
        //         </>
        //     )
        // }
        // export default App;
        
import React from "react"
import About from "./AboutComp/About";
import Blog from "./BlogComp/Blog";
import Category from "./CategoryComp/Category";
import Companies from "./CompaniesComp/Companies";
import Footer from "./FooterComp/Footer";
import Home from "./HomeSection.js/Home";
import Header from "./NavComponent/Header";
import Newsletter from "./Newsletter/Newletter";
import Packages from "./packagesComp/Package";
import Review from "./ReviewComp/Review";
import Services from "./SevicesComponent/Services";
import Shop from "./ShopCom/Shop";
        const App=()=>{
            return (
        <>
            <Header/>
            <Home/>
            <Category/>
            <About/>
            <Shop/>
            <Packages/>
            <Review/>
            <Services/>
            <Blog/>
            <Newsletter/>
            <Companies/>
            <Footer/>
        </>
    )
}
export default App;