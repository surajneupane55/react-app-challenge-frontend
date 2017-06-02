import React from 'react';
import ReactDOM from 'react-dom'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signup';
import registerServiceWorker from './registerServiceWorker';
import AuthenticatedApp from './components/AuthenticatedPage';
import LoginStorage from './storage/LoginStorage';
import {  Redirect } from 'react-router'
import LoginActions from './actions/LoginActions';


const app = document.getElementById('root');

let jwt = localStorage.getItem('jwt');
if (jwt) {
    LoginActions.loginUser(jwt);
}





ReactDOM.render(
    <Router history={createBrowserHistory}>
        <div>
            <Route exact path="/" component={Layout} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/record" component={AuthenticatedApp} />
            <Route exact path="/" render={() => (
                LoginStorage.isLoggedIn() ? (
                    <Redirect to="/record"/>
                ) : (
                    <Redirect to="/"/>
                )
            )}/>

        </div>
    </Router>,
app);

registerServiceWorker();



