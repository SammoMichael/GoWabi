import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { connect } from 'react-redux';
import GreetingContainer from './greeting/greeting_container';
import Splash from './splash';
import Modal from './modal/modal';
import LocationShowContainer from "./location_show/location_show_container";
import LocationFormContainer from "./locations_form/location_form_container";
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NewMapContainer from './newmap/newmap_container';

// export const App = ({ loggedIn }) => (
export const App = () => (
  <div >
    <div>
      <Modal />
    </div>
    <header>
      <nav className="header-nav">
        <Link to="/" className='BrandingNav'>
          <span to="/" className="icon-logo">
          </span>
          <h1 className="app-name">GoWabi</h1>
        </Link>
        <span className='greeting-span'>
          {/* {(window.currentUser) ? <SearchContainer /> : null} */}
          <GreetingContainer />
          <NewMapContainer zoom={12} center={{ lat: 40.6944, lng: -73.9213 }} />
        </span>
      </nav>
    </header>
    <Route exact path="/" component={Splash} />
    
      {/* <Route exact path="/locations/new" component={LocationFormContainer} /> */}
      {/* <Route path="/locations/:locationId" component={LocationShowContainer} /> */}
  </div>
);

const mapStateToProps = (state) => {
  return ({
    loggedIn: Boolean(state.session.id),
  });
};

export default connect(mapStateToProps)(App);
