import React from 'react';
import ReactDOM from 'react-dom'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signup';
import registerServiceWorker from './registerServiceWorker';
import LoginActions from './actions/LoginActions';



const app = document.getElementById('root');



let jwt = localStorage.getItem('jwt');
if (jwt) {
    LoginActions.loginUser(jwt);
}

ReactDOM.render(
    <Router history={createBrowserHistory}>
        <div>
            <Route exact path="/" component={Layout} /> {/* Note-1 */}
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
        </div>
    </Router>,
app);

registerServiceWorker();



