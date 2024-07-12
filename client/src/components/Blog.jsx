import { Link } from "react-router-dom";

export default function Blog() {

    return (
        <section id="blog" className="blog" >
            <div className="container">
                <div className="section-header">
                    <h2>news and articles</h2>
                    <p>Always upto date with our latest News and Articles </p>
                </div>
                <div className="blog-content">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="single-blog-item">
                                <div className="single-blog-item-img">
                                    <img src="assets/images/blog/b1.jpg" alt="blog image" />
                                </div>
                                <div className="single-blog-item-txt">
                                    <h2><Link to="#">How to find your Desired Place more quickly</Link></h2>
                                    <h4>posted <span>by</span> <Link to="#">admin</Link> march 2018</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="single-blog-item">
                                <div className="single-blog-item-img">
                                    <img src="assets/images/blog/b2.jpg" alt="blog image" />
                                </div>
                                <div className="single-blog-item-txt">
                                    <h2><Link to="#">How to find your Desired Place more quickly</Link></h2>
                                    <h4>posted <span>by</span> <Link to="#">admin</Link> march 2018</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="single-blog-item">
                                <div className="single-blog-item-img">
                                    <img src="assets/images/blog/b3.jpg" alt="blog image" />
                                </div>
                                <div className="single-blog-item-txt">
                                    <h2><Link to="#">How to find your Desired Place more quickly</Link></h2>
                                    <h4>posted <span>by</span> <Link to="#">admin</Link> march 2018</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}