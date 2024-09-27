import { getAll } from "../../hooks/useBusiness"

export default function Explore() {
    const business = getAll();
    console.log(business);

    return (
        <section id="explore" className="explore">
            <div className="container">
                <div className="section-header">
                    <h2>explore</h2>
                    <p>Explore New place, food, culture around the world and many more</p>
                </div>
                <div className="explore-content">
                    <div className="row">
                        <ul>
                            {Object.values(business).map(currBussiness => (
                                <li key={currBussiness._id}>
                                    <div className=" col-md-4 col-sm-6">
                                        <div className="single-explore-item">
                                            <div className="single-explore-img">
                                                <img src={currBussiness.businessImage} alt="explore image" />
                                                <div className="single-explore-img-info">
                                                    <div className="single-explore-image-icon-box">
                                                        <ul>
                                                            <li>
                                                                <div className="single-explore-image-icon">
                                                                    <i className="fa fa-arrows-alt"></i>
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div className="single-explore-image-icon">
                                                                    <i className="fa fa-bookmark-o"></i>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-explore-txt bg-theme-1">
                                                <h2><a href="#">{currBussiness.businessName}</a></h2>
                                                <p className="explore-rating-price">
                                                    <span className="explore-rating">5.0</span>
                                                    <a href="#"> 10 ratings</a>
                                                    <span className="explore-price-box">
                                                        from
                                                        <span className="explore-price">5$-300$</span>
                                                    </span>
                                                    <span className="explore-type">{currBussiness.businessType}</span>
                                                    <span className="explore-place">{currBussiness.businessPlace}</span>
                                                </p>
                                                <div className="explore-person">
                                                    <div className="row">
                                                        <div className="col-sm-2">
                                                            <div className="explore-person-img">
                                                                <a href="#">
                                                                    <img src="assets/images/explore/person.png" alt="explore person" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-10">
                                                            <p>{currBussiness.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}