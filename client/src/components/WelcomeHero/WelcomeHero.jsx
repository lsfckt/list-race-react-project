import { getUserLocation } from "../../utils/getUserLocation"

export default function WelcomeHero() {

    const { getLocationHandler, userLocation, changeHandler } = getUserLocation();

    return (
        <section id="home" className="welcome-hero">
            <div className="container">
                <div className="welcome-hero-txt">
                    <h2>best place to find and explore <br /> that all you need </h2>
                    <p>
                        Find Best Place, Restaurant, Hotel, Real State and many more think in just One click
                    </p>
                </div>
                <div className="welcome-hero-serch-box">
                    <div className="welcome-hero-form">
                        <div className="single-welcome-hero-form">
                            <h3>what?</h3>
                            <form action="index.html">
                                <input type="text" placeholder="Ex: place, restaurant, food, automobile" />
                            </form>
                        </div>
                        <div className="single-welcome-hero-form">
                            <h3>location</h3>
                            <form action="index.html">
                                <input
                                    type="text"
                                    placeholder="Ex: london, newyork, rome"
                                    value={userLocation}
                                    onChange={changeHandler}
                                />
                            </form>
                            <div className="welcome-hero-form-icon">
                                <button onClick={getLocationHandler} className="flaticon-gps-fixed-indicator"></button>
                            </div>
                        </div>
                    </div>
                    <div className="welcome-hero-serch">
                        <button className="welcome-hero-btn" onclick="window.location.href='#'">
                            search  <i data-feather="search"></i>
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}