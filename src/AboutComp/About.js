import React from "react";
import image1 from "../Images/image1.jpg"

const About=()=>{
    return (
        <>
            <section id="about" className="about">
                <div className="image">
                    <img src={image1} alt="about pic"/>
                </div>
                <div className="content"> 
                    <h3>
                        Memorable outdoor experience
                    </h3>
                    <p>hello friends, On day I achieve our goals and become a good citizen. I want to become a good person, that help everybody, put simile on every face</p>
                    <a className="btn">Read more</a>
                </div>
            </section>

        </>
    )
}
export default About;