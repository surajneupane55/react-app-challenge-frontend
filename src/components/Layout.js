/**
 * Created by surajnew55 on 24/05/2017.
 */
import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import '../Skeleton.css';
import Body from './Body';
import Footer from './Footer'
import Header from './Header';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React on Rails API</h2>
                </div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}
