import GoogleMapReact from 'google-map-react';
import { GoogleApiWrapper, InfoWindow } from "google-maps-react";
import React from 'react';
import Marker from './Marker';

export default class NewMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,  //Hides or the shows the infoWindow
            activeMarker: {},          //Shows the active marker upon click
            selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
        };
    }

    componentDidMount() {
        this.props.fetchLocations();
        const iconUrls = {
            spa: "",
            barber: "",
            removal: "",
            beauty: "",
        }; 
    }
    
    render() {
        if(!this.props.locations) {
          return  (<div>loading</div>)
        } else {
        const markers = this.props.locations.map((loc) => (
            <Marker 
                // position={{ lat: loc.lat, lng: loc.lng }}
                lat={loc.lat}
                lng={loc.lng}
                text={loc.category}
                key={loc.id} />
            
        ));
        return (
          <div style={{ height: "80vh", width: "60%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyBdKGFAJbGj2l9yy3V68oPp7cMR1pxS1s0",
                language: "english"
              }}
              defaultCenter={{ lat: 40.6944, lng: -73.9213 }}
              defaultZoom={11}
              className="new-map"
            >
                    {markers}
              
            </GoogleMapReact>
          </div>
            );
        }
    }
}
