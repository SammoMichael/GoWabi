import React from 'react';
import { withRouter } from 'react-router';

class LocationForm extends React.Component{
  constructor(props) {
    super(props);
    this.coords = {lat: props.lat, lng: props.lng};
    this.state = {
      description: '',
      img_url: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.handleCloudinary = this.handleCloudinary.bind(this);
  }

  navigateToSearch() {
    this.props.history.push('/');
  }

  update(property) {
    return e => this.setState({
      [property]: e.target.value
    });
  }

  handleCloudinary(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, (error, results) => {
      if(error)
        console.log(error);
      else
        this.setState({ img_url: results[0].secure_url });
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const location = Object.assign({}, this.state, this.coords);
    this.props.createLocation(location);
    this.navigateToSearch();
  }

  render() {
    const { description, img_url, seating } = this.state;
    const { lat, lng } = this.coords;

    return (
      <div className="new-location-container">
        <div className="new-location-form">
          <h3 className="new-location-title">Create A Location!</h3>

          <form onSubmit={this.handleSubmit}>
            <label className="location-field">Description</label>
            <input
              type="text"
              value={description}
              onChange={this.update('description')}
              className="location-field"
            />

            <label className="location-field">Number of Seats</label>
            <input
              min="0"
              type="number"
              value={seating}
              onChange={this.update('seating')}
              className="location-field"
            />

            <label className="location-field">Latitude</label>
            <input
              type="text"
              disabled
              value={lat}
              className="location-field"
            />

            <label className="location-field">Longitude</label>
            <input
              type="text"
              disabled
              value={lng}
              className="location-field"
            />

            <div className="button-holder">
              <button
                onClick={this.handleCloudinary}
                className="new-location-button"
              >
                Add image
              </button>
            </div>

            <hr />

            <div className="button-holder">
              <input
                type="submit"
                value="Create Location"
                className="new-location-button"
              />
            </div>
          </form>

          <div className="button-holder">
            <button
              className="new-location-button"
              onClick={this.navigateToSearch}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LocationForm);
