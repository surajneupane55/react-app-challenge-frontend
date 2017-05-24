/**
 * Created by surajnew55 on 24/05/2017.
 */
import React from 'react';


export default class Header extends React.Component {
    render() {
        return (
            <header>
                <br/>
                <div className="container">
                    <div className="row">
                        <a className="button six columns" href="#">SignIn</a>
                        <a className="button six columns" href="#">SignUp</a>
                    </div>
                </div>
            </header>
        );
    }
}
