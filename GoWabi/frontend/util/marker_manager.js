/* global google:false */

class MarkerManager {
    constructor(map, handleClick) {
        this.map = map;
        this.handleClick = handleClick;
        this.markers = {};
    }

    updateMarkers(locations) {
        const locationsObj = {};
        locations.forEach(location => locationsObj[location.id] = location);

        locations
            .filter(location => !this.markers[location.id])
            .forEach(newLocation => this.createMarkerFromLocation(newLocation, this.handleClick));

        Object.keys(this.markers)
            .filter(locationId => !locationsObj[locationId])
            .forEach((locationId) => this.removeMarker(this.markers[locationId]));
    }

    createMarkerFromLocation(location) {
        const position = new google.maps.LatLng(location.lat, location.lng);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            locationId: location.id
        });

        marker.addListener('click', () => this.handleClick(location));
        this.markers[marker.locationId] = marker;
    }

    removeMarker(marker) {
        this.markers[marker.locationId].setMap(null);
        delete this.markers[marker.locationId];
    }
}

export default MarkerManager;
