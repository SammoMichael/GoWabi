import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

import MarkerManager from '../../util/marker_manager';

const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 40.73061,
    lng: -73.935242
  }, // New York City coords
  zoom: 13
};

class Map extends React.Component {
    componentDidMount() {
        const map = this.refs.map;
        this.map = new google.maps.Map(map, mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        if (this.props.singleLocation) {
            this.props.fetchLocation(this.props.LocationId);
        } else {
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.locations);
        }
    }

    componentDidUpdate() {
        if (this.props.singleLocation) {
            const targetlocationKey = Object.keys(this.props.locations)[0];
            const targetlocation = this.props.locations[targetlocationKey];
            this.MarkerManager.updateMarkers([targetlocation]); //grabs only that one location
        } else {
            this.MarkerManager.updateMarkers(this.props.locations);
        }
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds);
        });
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        });
    }

    handleMarkerClick(location) {
        this.props.history.push(`locations/${location.id}`);
    }

    handleClick(coords) {
        this.props.history.push({
            pathname: 'locations/new',
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    render() {
        return (
            <div className="map" ref="map">
                Map
      </div>
        );
    }
}

export default withRouter(Map);
