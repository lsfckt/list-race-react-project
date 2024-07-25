import { useEffect, useState } from 'react';
import * as requester from '../../api/requester';

export default function Explore() {

    const [business, setBusiness] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await requester.get('http://localhost:3030/data/business-catalog');
            const catalog = setBusiness(data);
        })();
    }, []);

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
                            {business.map(business => (
                                <li key={business._id}>
                                    <div className=" col-md-4 col-sm-6">
                                        <div className="single-explore-item">
                                            <div className="single-explore-img">
                                                <img src={business.image} alt="explore image" />
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
                                                <h2><a href="#">{business.businessName}</a></h2>
                                                <p className="explore-rating-price">
                                                    <span className="explore-rating">5.0</span>
                                                    <a href="#"> 10 ratings</a>
                                                    <span className="explore-price-box">
                                                        form
                                                        <span className="explore-price">5$-300$</span>
                                                    </span>
                                                    <a href="#">{business.businessType}</a>
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
                                                            <p>{business.description}</p>
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