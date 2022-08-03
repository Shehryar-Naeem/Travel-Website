import React from "react"

const Newsletter=()=>{
    return (
        <>
            <section className="newsletter">
                <div className="content">
                    <h1 className="heading">Subscribe Now</h1>
                    <p>This is the good company for travel agency</p>
                    <form>
                        <input type="email" placeholder="Enter you email" className="email"/>
                        <button>Subscribe</button>
                    </form>
                </div>
            </section>
        </>
    )
}
export default Newsletter