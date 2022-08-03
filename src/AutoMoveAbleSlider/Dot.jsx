import React from "react";

const Dot =({activeIndex,onclick,ImageSlection})=>{
    return (
        <>
            <div className="all_dots">
                {
                    ImageSlection.map((slide,index)=>{
                        return (<span
                        key={index}
                        className={`${activeIndex===index?"dot active_dot":"dot"}`}
                        onClick={()=>{
                            return onclick(index)
                        }}></span>)
                        
                    })
                }
            </div>
        </>
    )
}
export default Dot;