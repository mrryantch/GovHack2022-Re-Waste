import { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import { RewasteHub } from "../../data/RewasteHub";

interface mapInterface {
  setTitle: (value: string) => void;
  setDesc: (value: string) => void;
  setHours: (value: string) => void;
  setContact: (value: string) => void;

  dropDownValue: string;
  markers: google.maps.Marker[];
}
const Map = ({
  markers,
  dropDownValue,
  setTitle,
  setDesc,
  setHours,
  setContact,
}: mapInterface) => {
  const [map, setMap] = useState<google.maps.Map>();
  const [adelaideLonLat] = useState([-34.928664106389625, 138.59996004847085]);

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
          console.log("map rendering error1");
        });
    }
  }, [adelaideLonLat, markers]);

  useEffect(() => {
    if (map) {
      if (markers.length > 0) {
        // clear markers here
        for (let i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers.length = 0;
      }
      // eslint-disable-next-line array-callback-return
      RewasteHub.map((hub) => {
        const originalMarker = {
          position: { lat: parseFloat(hub.lat), lng: parseFloat(hub.lon) },
          map,
        };
        const precinctMarker = {
          position: { lat: parseFloat(hub.lat), lng: parseFloat(hub.lon) },
          map,
          icon: {
            url: "http://maps.google.com/mapfiles/ms/micons/blue-dot.png",
          },
        };

        const marker = new google.maps.Marker(
          dropDownValue === hub.precinct ? precinctMarker : originalMarker
        );

        marker.addListener("click", () => {
          setTitle(hub.name);
          setDesc(hub.desc);
          setHours(hub.hours);
          setContact(hub.contact);
        });

        marker.setMap(map);
        markers.push(marker);
      });
    }
  }, [dropDownValue, map, markers, setTitle]);

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
