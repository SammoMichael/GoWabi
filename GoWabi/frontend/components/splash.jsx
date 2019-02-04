import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import { openModal } from '../actions/modal_actions';

const Splash = ({ loggedIn }) => {
    if (!loggedIn) {
        return (
            <div id="splash" className="slide header slide-1">
                <div className='main-div'>
                    <div>
                        <div className="splash-headers">
                            <h1 className="slide-title">The World's Best Spas</h1>
                            <h2 className="blurb-heading"> Relax and drift away...</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        null);
        // <Redirect to='/decks' />);
};

const mapStateToProps = (state) => {
    return ({
        loggedIn: Boolean(state.session.id)
    });
};

const mapDispatchToProps = (dispatch) => {
    return ({
        openModal: (modal) => dispatch(openModal(modal))
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
