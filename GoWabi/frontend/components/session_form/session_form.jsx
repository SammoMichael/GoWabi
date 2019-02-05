import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.loginDemoUser();
    this.props.closeModal();
  }

  renderErrors() {
    return (
      <>
        {/* {this.props.errors.map((error, i) => (
          <li
            className="error-li"
            key={`error-${i}`}
          >
            {error}
          </li>
        ))} */}
      </>
    );
  }

  render() {
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          <br />
          <span className="form-type-name">{this.props.formType}</span>
          <i onClick={this.props.closeModal} className="close-x" ></i>
          <div className="login-form">
            <br />
            <label>
              <input
                type="text"
                placeholder="you@email.com"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input-username"
              />
            </label>
            <br />
            <label>
              <input
                type="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input-password"
              />
            </label>
            <input
              className="session-submit-login"
              type="submit"
              value={this.props.formType} />
          </div>
          <button
            className="demo-button"
            onClick={this.handleDemoLogin}>Demo User</button>
        </form>
        {this.renderErrors()}
      </div>
    );
  }
}

export default withRouter(SessionForm);
