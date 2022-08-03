import React from "react";

const SlideContent =({activeIndex,ImageSlection})=>{
    return (
        <>
            <section>
                {ImageSlection.map((slide,index)=>{
                    return <div 
                        key={index} 
                        className={index===activeIndex?"slides active": "inactive"}>
                            <img className="slide_image" src={slide.url} alt="images" />
                            <h2 className="slide_title">{slide.title}</h2>
                            <h2 className="slide_text">{slide.discription}</h2>
                        </div>
                    
                })}
            </section>
        </>
    )
}
export default SlideContent;