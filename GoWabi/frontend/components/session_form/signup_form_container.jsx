import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, loginDemoUser } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginDemoUser: () => dispatch(loginDemoUser()),
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button className="session-submit-signup"
        onClick={() => dispatch(openModal('Login'))}>
        Login
            </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);