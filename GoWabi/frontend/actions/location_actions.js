import * as APIUtil from '../util/location_api_util'

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS';
export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';

export const receiveLocations = locations => ({
  type: RECEIVE_LOCATIONS,
  locations,
});

export const receiveLocation = ({ location, reviews }) => ({
  type: RECEIVE_LOCATION,
  location,
  reviews,
});

export const fetchLocations = filters => dispatch => (
  APIUtil.fetchLocations(filters).then(locations => (
    dispatch(receiveLocations(locations))
  ))
);

export const fetchLocation = id => dispatch => (
  APIUtil.fetchLocation(id).then(payload => (
    dispatch(receiveLocation(payload))
  ))
);

export const createLocation = location => dispatch => (
  APIUtil.createLocation(location).then(location => (
    dispatch(receiveLocation(location))
  ))
);
