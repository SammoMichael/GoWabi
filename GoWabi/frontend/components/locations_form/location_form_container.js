import { connect } from 'react-redux';

import { createLocation } from '../../actions/location_actions';
import LocationForm from './location_form';

const mapStateToProps = (state, { location }) => ({
  lat: new URLSearchParams(location.search).get('lat'),
  lng: new URLSearchParams(location.search).get('lng')
});

const mapDispatchToProps = dispatch => ({
  createLocation: location => dispatch(createLocation(location))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationForm);
