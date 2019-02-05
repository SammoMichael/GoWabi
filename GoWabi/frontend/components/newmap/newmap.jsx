import GoogleMapReact from 'google-map-react';
import fetchLocations from '../../actions/location_actions';
import React from 'react';

export class newmap extends React.Component {
    render() {
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
            />
          </div>
        );
}
}

export default newmap

