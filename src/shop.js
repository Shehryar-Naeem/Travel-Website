<section className="shop" id="shop">
                <h1 className="heading">Feature Products</h1>
                <Slider>
                <div className="product_slider">
                    <div className="wrapper">
                        {
                            shopData.map((cur,index)=>{
                                return (
                                    <>
       
                                        <div className="slide">
                                            <div className="image" key={index}>
                                                <img src={cur.pic} alt="tour"/>
                                                <div className="icons">
                                                    <a href="#" className="fas fa-shopping-cart"></a>
                                                    <a href="#" className="fas fa-eye"></a>
                                                    <a href="#" className="fas fa-share"></a>
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3>{cur.title}</h3>
                                                <div className="price">{cur.price}</div>
                                                <div className="stars">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half-alt"></i>
                                                </div>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                    </Slider>
            </section>