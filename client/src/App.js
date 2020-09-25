import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Component/Layout/Navbar';
import Landing from './Component/Layout/Landing';
import Register from './Component/auth/Register';
import Dashboard from './Component/dashborad/Dashboard';
import PrivateRoute from './Component/routing/PrivateRoute';
// import PrivateRouteAdmin from './Component/routing/PrivateRouteAdmin';
import CreateProfile from './Component/porfile-forms/CreateProfile';
import EditProfile from './Component/porfile-forms/EditProfile';
import AddEducation from './Component/porfile-forms/AddEducation';
import AddExperience from './Component/porfile-forms/AddExperience';
import MyProfile from './Component/porfile/MyProfile';
import AllProfile from './Component/porfile/Allprofile';
import ProfilePeople from './Component/porfile/ProfilePeople';
import PathAdmin from './Component/Admin/PathAdmin';
import Posts from './Component/posts/Posts';
import Post from './Component/post/Post';
import Cour from './Component/cour/cours';
import Cours from './Component/cours/Cours';

import Room from './Component/chat/Room';
import FriendOnline from './Component/Online/FriendOnline';
import Login from './Component/auth/Login';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './Component/Layout/Alert';
import { loadUser } from './actions/auth';
// import { loadUserAdmin } from './actions/admin';
import Experience from './Component/dashborad/Experience';
import Education from './Component/dashborad/Education';
import ManageUsers from './Component/Admin/ManageUsers';
import ManagePosts from './Component/Admin/ManagePosts';
import AddEncadrement from './Component/Encadrement/AddEncadrement';
import Addencadrementpage from './Component/Encadrement/Addencadrementpage';

import setAuthToken from './utils/setAuthToken';
// import DashboardAdmin from './Component/Admin/DashboardAdmin';
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    // store.dispatch(loadUserAdmin());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <FriendOnline />
          <Route exact path='/' component={Landing} />
          <section className='container'>
            <Alert className='aaa' />
            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/admin' component={PathAdmin} />

              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute
                exact
                path='/create-profile'
                component={CreateProfile}
              />

              <PrivateRoute exact path='/cours' component={Cours} />

              <PrivateRoute
                exact
                path='/Edit-profile'
                component={EditProfile}
              />
              <PrivateRoute
                exact
                path='/add-education'
                component={AddEducation}
              />
              <PrivateRoute
                exact
                path='/add-experience'
                component={AddExperience}
              />
              <PrivateRoute exact path='/profile' component={MyProfile} />
              <PrivateRoute exact path='/profiles' component={AllProfile} />
              <PrivateRoute
                exact
                path='/friendprofiles'
                component={ProfilePeople}
              />
              <PrivateRoute exact path='/home' component={Posts} />
              <PrivateRoute exact path='/posts' component={Post} />
              <PrivateRoute exact path='/coursdetails' component={Cour} />

              <PrivateRoute exact path='/chat' component={Room} />
              <PrivateRoute
                exact
                path='/delete-experience'
                component={Experience}
              />
              <PrivateRoute
                exact
                path='/delete-education'
                component={Education}
              />
              <PrivateRoute
                exact
                path='/encadrement'
                component={AddEncadrement}
              />
              <PrivateRoute
                exact
                path='/addencadrement'
                component={Addencadrementpage}
              />
              {/* <PrivateRoute
                exact
                path='/DashboardAdmin'
                component={DashboardAdmin}
              /> */}
              <PrivateRoute exact path='/all-posts' component={ManagePosts} />

              <PrivateRoute exact path='/all-users' component={ManageUsers} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
