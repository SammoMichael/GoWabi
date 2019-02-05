import { connect } from 'react-redux';
import { fetchLocations } from '../../actions/location_actions';
import NewMap from './newmap';

const mapStateToProps = (state) => {
    return ({
        locations: Object.values(state.entities.locations)
    });
};

const mapDispatchToProps = (dispatch) =>  {
    return ({
        fetchLocations: () => dispatch(fetchLocations())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMap);
