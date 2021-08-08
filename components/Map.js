import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  // Transform the search results into the
  // latitude longitude object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // center of coodinates
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 10,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/guitarjam/cks1833zy1hpf18mel3sxq2oy"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <img
              onClick={() => {
                setSelectedLocation(result);
              }}
              src="https://expertdesign.cc/papa-react-images/274px-Google_Maps_pin.svg.png"
              className={"h-8 cursor-pointer"}
              alt=""
            />
          </Marker>
          {/* Popup if marker is clicked on */}
          {selectedLocation.long === result.long ? (
            <Popup
              className=""
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
