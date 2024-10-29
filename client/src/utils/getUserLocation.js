import { useState } from "react";

import requester from "../api/requester";

export const getUserLocation = () => {
    const [userLocation, setUserLocation] = useState(null);

    const getLocationHandler = () => {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;

                    const API_LOCATION_KEY = import.meta.env.VITE_LOCATION_API_KEY;

                    const locationResult = await requester.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&language=en&key=${API_LOCATION_KEY}`);
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
    }


    const changeHandler = (e) => setUserLocation(e.target.value);

    return {
        getLocationHandler,
        userLocation,
        changeHandler,
    }
};