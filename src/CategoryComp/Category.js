import Raect from "react";
import { SliderData } from "../HomeSection.js/SliderData"
const Category = () => {
  return (
    <>
      <div className="category">
        <h1 className="heading">Adventure Idea!</h1>
          <div className="box_container">
        {SliderData.map((cur) =>    
        <>
          <div className="box">
            <img src={cur.pic} alt="adventure" />
            <h3>{cur.title}</h3>
            <p>{cur.content}</p>
            <a className="btn">Read more</a>
          </div>

        </>
        )}
          </div>
      </div>
    </>
  );
};
export default Category;
