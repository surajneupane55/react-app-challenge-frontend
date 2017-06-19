/**
 * Created by surajnew55 on 24/05/2017.
 */
import React from 'react';
import { Link } from 'react-router-dom'


export default class Header extends React.Component {
    render() {
        return (

            <header>
                <br/>
                <div className="container">
                    <div className="row">
                        <Link to='login' className="btn button-primary"><strong><h5>SignIn</h5></strong></Link>
                        {/*<Link to='signup'  className="btn  six columns" disabled>SignUp</Link>*/}
                    </div>
                </div>
            </header>
        );
    }
}
