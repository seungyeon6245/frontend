import React from "react";
import GoogleMap from "google-map-react";
import "../style/Map.css"

class Map extends React.Component {
    render() {
        return (
            <div className="map">
                <GoogleMap
                    bootstrapURLKeys = {{ key: AIzaSyAfvQOazZ0qShsPG4_KMXYk1mwzbINU9YY }}>
                    defaultZoom={15}
                    defaultCenter={{ lat: 37.5, lng: 127 }}
                    ></GoogleMap>
            </div>
        );
    }
}

export default Map;
