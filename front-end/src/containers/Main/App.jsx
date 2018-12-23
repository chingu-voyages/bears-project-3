import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../../styles/App.css';

// Universal Components
import Header from './presentational/Header';
import Footer from './presentational/Footer';

// Pages
import Home from '../Home/Home';
import SignIn from '../Auth/presentational/SignIn';
import Register from '../Auth/presentational/Register';
// import CreateEvent from '../Events/CreateEvent';
// import UserProfile from '../UserProfile/UserProfile';
// import Events from '../Events/Events';

// TODO: Implement event creation
// TODO: Implement event browser
// TODO: Implement user profile

const App = () => (
  <div>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route exact path="/register" component={Register} />
        {/* <Route exact path="/events" component={Events} /> */}
        {/* <Route exact path="/events/new" component={CreateEvent} /> */}
        {/* <Route exact path="/user/:id" component={UserProfile} /> */}
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
