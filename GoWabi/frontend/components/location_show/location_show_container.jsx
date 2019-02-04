import { connect } from 'react-redux';

import { fetchLocation } from '../../actions/location_actions';
import { selectLocation } from '../../reducers/selectors';
import LocationShow from './location_show';

const mapStateToProps = (state, { match }) => {
  const locationId = parseInt(match.params.locationId);
  const location = selectLocation(state.entities, match.params.locationId);
  return {
    locationId,
    location
  };
};

const mapDispatchToProps = dispatch => ({
  fetchlocation: id => dispatch(fetchLocation(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationShow);
