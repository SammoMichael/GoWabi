import merge from 'lodash/merge';

import {
  RECEIVE_LOCATIONS,
  RECEIVE_LOCATION
} from '../actions/location_actions';

const locationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LOCATIONS:
      return action.locations;
    case RECEIVE_LOCATION:
      const newLocation = { [action.location.id]: action.location };
      return merge({}, state, newLocation);
    default:
      return state;
  }
};

export default locationsReducer;
