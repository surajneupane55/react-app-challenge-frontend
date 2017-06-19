import React from 'react';
import ReactDOM from 'react-dom'
import {  BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import {createBrowserHistory} from 'history';
import Layout from './components/Layout';
import Login from './components/Login';
// import Signup from './components/Signup';
import registerServiceWorker from './registerServiceWorker';
import ProtectedApp from './components/Protected'
import LoginActions from './components/LoginActions';



const app = document.getElementById('root');

LoginActions.loggedIn();

ReactDOM.render(
    <Router history={createBrowserHistory}>
        <div>
                <Route exact path="/" component={Layout} />
                <Route path="/login" component={Login} />
                {/*<Route path="/signup" component={Signup} />*/}
                <Route render={() => (
                this.loggedIn ? (
                    <Redirect to="/protected" component={ProtectedApp}/>
                ) : (
                        <Redirect to="/" component={Layout}/>
                    )
            )}/>
            <Route path="/protected" component={ProtectedApp} />
        </div>
    </Router>,
app);

registerServiceWorker();



