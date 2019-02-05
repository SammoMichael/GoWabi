import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";

const InitialMap = withGoogleMap(props => {
    // var index = this.marker.index || [];

    return (
        <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={14}
            defaultCenter={{ lat: 40.6944, lng: -73.9213 }}
            className="map"
        >
            {/* <Marker
                key={index}
                position={marker.position}
                onClick={() => props.onMarkerClick(marker)}
            /> */}
        </GoogleMap>
    )
});

export default class MapContainer extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     markers: [{
        //         position: {
        //             lat: 255.0112183,
        //             lng: 121.52067570000001,
        //         }
        //     }]
        // }
    }
    render() {
        return (
            <div style={{ height: "100%" }}>
                <InitialMap
                    containerElement={
                        <div style={{ height: "100%" }} />
                    }
                    mapElement={
                        <div style={{ height: "100%" }} />
                    }
                     />
            </div>
        );
    }
}
    
