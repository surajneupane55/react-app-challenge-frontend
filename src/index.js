import React from 'react';
import ReactDOM from 'react-dom'
import {  BrowserRouter as Router, Route } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import Layout from './components/Layout';
import Login from './components/Login';
import Signup from './components/Signup';
import registerServiceWorker from './registerServiceWorker';
import ProtectedApp from './components/Protected'


const app = document.getElementById('root');



ReactDOM.render(
    <Router history={createBrowserHistory}>
        <div>
            <Route exact path="/" component={Layout} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/protected" component={ProtectedApp} />
        </div>
    </Router>,
app);

registerServiceWorker();



