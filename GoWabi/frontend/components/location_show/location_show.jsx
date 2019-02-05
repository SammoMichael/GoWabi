import React from 'react';
import { Link } from 'react-router-dom';

import LocationDetail from './location_detail';
import LocationMap from '../map/map';
import { ProtectedRoute } from '../../util/route_util';

const locationShow = ({ location, locationId, fetchlocation }) => {
  const locations = {
    [locationId]: location
  };

  return (
    <div className="single-location-show">
      <div className="single-location-map">
        <Link to="/">Back to locationes Index</Link>
        <LocationMap
          locations={locations}
          locationId={locationId}
          singleLocation={true}
          fetchlocation={fetchlocation}
        />
      </div>
      <div className="right-half location-details">
        <LocationDetail location={location} />
      </div>
    </div>
  );
};

export default locationShow;
