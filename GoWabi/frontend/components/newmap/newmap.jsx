import GoogleMapReact from 'google-map-react';
import { GoogleApiWrapper } from 'google-maps-react';
import fetchLocations from '../../actions/location_actions';
import React from 'react';
import { connect } from '../../components/map/map';

const locations = window.dispatch(fetchLocations());

debugger;


export const NewMap = () => (
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
            <Marker
                title={'The marker`s title will appear as a tooltip.'}
                name={'SOMA'}
                position={{ lat: 37.778519, lng: -122.405640 }} />
            </GoogleMapReact>
          </div>
        );

const mapStateToProps = (state) => {
    return ({
        state: {}
    });
};

const mapDispatchToProps = dispatch => ({
    fetchLocations: () => dispatch(fetchLocations())
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMap);

