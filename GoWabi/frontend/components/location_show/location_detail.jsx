import React from 'react';
import { Link } from 'react-router';


const LocationDetail = ({ location }) => {
  return (
    <div>
      <ul className="location-list">
        <img alt="thumb" className="index-image" src={location.img_url} />
        <li>Description: {location.description}</li>
        <li>Latitude: {location.lat}</li>
        <li>Longitude: {location.lng}</li>
      </ul>
      <br />
    </div>
  );
};

export default LocationDetail;
