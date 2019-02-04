import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, loginDemoUser } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginDemoUser: () => dispatch(loginDemoUser()),
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button
        className="session-submit-register"
        onClick={() => dispatch(openModal('signup'))}>
        Register
            </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
