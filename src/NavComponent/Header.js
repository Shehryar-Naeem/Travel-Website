import React, { useState } from "react" 
const Header=()=>{
    const [show,setShow] = useState(true)
    const [search,setSearch] = useState(true)
    return (
        <>
        {/* navSection start*/}
            <header className="header">
                <a href="#" className="logo"><i className="fas fa-hiking"></i>Travel</a>
                <nav className={show?"navbar":"navbar active"}>
                    <div id="nav_class" className="fas fa-times" onClick={()=>setShow(!show)}></div>
                    <a href="#">Home</a>
                    <a href="#">about</a>
                    <a href="#">shop</a>
                    <a href="#">Packages</a>
                    <a href="#">reviews</a>
                    <a href="#">blogs</a>
                </nav>
                <div className="icons">
                    <div id="menu_btn" className="fas fa-bars" onClick={()=>setShow(!show)}></div>
                    <a href="#" className="fas fa-shopping-cart" ></a>
                    <div id="search_btn" className="fas fa-search" onClick={()=>setSearch(!search)}></div>
                </div>
            </header>
            {/* navSection End */}

            {/* searchform section start */}
            <div className={search?"search_form":"search_form activeSearch"}>
            <div className="fas fa-times" id="search_close" onClick={()=>setSearch(!search)}></div>
                <form>
                    <input type="search" name="search" placeholder="Search here ...." id="search_box" />
                    <label id="search_box" className="fas fa-search" ></label>
                </form>
            </div>

        </>
    )
}

export default Header