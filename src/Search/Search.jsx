// import React, { useState } from "react";
// import SearchImage from "./SearchImage";
// import "./Search.css";

// const Search =()=>{
//     const [search,setSearch]=useState("")
//     const searchingBar = (event)=>{
//         const data = event.target.value;
//         console.log(data);
//         setSearch(data)
//     }
//     return (
//         <>
//         <div className="searching">
//             <input type="text" placeholder="Search" value={search} onChange={searchingBar}/>
//             {search===""? null: <SearchImage name={search}/>}
//         </div>
//         </>
//     )
// }
// export default Search;