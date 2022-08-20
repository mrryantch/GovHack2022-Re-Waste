import { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const [map, setMap] = useState<google.maps.Map>();
  useEffect(() => {
    if (process.env.REACT_APP_GOOGLE_MAP_API_KEYS) {
      const mapOptions = {
        center: {
          lat: -34.92123,
          lng: 138.599503,
        },
        zoom: 14,
      };

      const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEYS,
        version: "beta",
      });

      // Promise
      loader
        .load()
        .then((google) => {
          const m = new google.maps.Map(
            document.getElementById("map") as HTMLElement,
            mapOptions
          );

          setMap(m);
        })
        .catch((e) => {
          console.log("map rendering error");
        });
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default Map;
