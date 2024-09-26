import { useState } from "react";

import requester from "../../api/requester";

const API_KEY = 'AIzaSyC5ekbxTjvsdMDDWXQyK4VrtDcJonMPC-4';

export default function WelcomeHero() {
    const [userLocation, setUserLocation] = useState(null);

    const getUserLocation = () => {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    const locationResult = await requester.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`);
                    const locationArray = locationResult.results[0];

                    const city = locationArray.address_components.find((component) =>
                        component.types.includes("locality")
                    );

                    setUserLocation(city.long_name);

                },
                (error) => {
                    // display an error if we cant get the users position
                    console.error('Error getting user location:', error);
                }
            );

        }
        else {
            // display an error if not supported
            console.error('Geolocation is not supported by this browser.');
        }
    };

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
                                <input type="text" placeholder="Ex: palce, resturent, food, automobile" />
                            </form>
                            <div className="welcome-hero-form-icon">
                                <i className="flaticon-list-with-dots"></i>
                            </div>
                        </div>
                        <div className="single-welcome-hero-form">
                            <h3>location</h3>
                            <form action="index.html">
                                <input
                                    type="text"
                                    placeholder="Ex: london, newyork, rome"
                                    value={userLocation}
                                    onChange={(e) => setUserLocation(e.target.value)}
                                />
                            </form>
                            <div className="welcome-hero-form-icon">
                                <button onClick={getUserLocation} className="flaticon-gps-fixed-indicator"></button>
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