import { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { RewasteHub } from "../../data/RewasteHub";

const Map = () => {
  const [map, setMap] = useState<google.maps.Map>();
  const adelaideLonLat = [-34.928664106389625, 138.59996004847085];
  const myLatLng = { lat: -34.928664106389625, lng: 138.59996004847085 };
  useEffect(() => {
    if (process.env.REACT_APP_GOOGLE_MAP_API_KEYS) {
      const mapOptions = {
        center: {
          lat: adelaideLonLat[0],
          lng: adelaideLonLat[1],
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

  useEffect(() => {
    if (map) {
      RewasteHub.map((hubs) => {
        const marker = new google.maps.Marker({
          position: { lat: parseFloat(hubs.lat), lng: parseFloat(hubs.lon) },
          map,
        });

        marker.setMap(map);
      });
    }
  }, [map]);

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
