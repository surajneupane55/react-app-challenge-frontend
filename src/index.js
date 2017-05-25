import React from 'react';
import ReactDOM from 'react-dom';
import Router, {Route} from 'react-router';
import App from './components/Layout';
import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path="/" component={App}/>
    </Router>,
    app );
registerServiceWorker();
