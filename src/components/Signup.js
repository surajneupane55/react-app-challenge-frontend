/**
 * Created by surajnew55 on 25/05/2017.
 */
import React from 'react';
import Auth from '../services/AuthService'

export default class Signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            registerValues: {}
        };
    }

    handleChangeevent(event){
        event.preventDefault();
        let registerValues = this.state.registerValues;
        let name = event.target.name;
        let value = event.target.value;

        registerValues[name] = value;
        this.setState({registerValues})

    }



        signup(e) {
        e.preventDefault();
        console.log(this.state.registerValues);
        Auth.signup(this.state.registerValues.email,this.state.registerValues.password, this.state.registerValues.conform)
            .catch(function(err) {
                alert("There's an error logging in");
                console.log("Error logging in", err);
            });
    }

    render() {
        return (
        <div className="row">
            <div className="three column"></div>
            <div className="six columns">
                <h1>Signup</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input type="text" value={this.state.registerValues['email']} onChange={this.handleChangeevent.bind(this)} className="form-control" name="email" placeholder="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={this.state.registerValues['password']} onChange={this.handleChangeevent.bind(this)} className="form-control" name="password" id="password" ref="password" placeholder="Password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password again</label>
                        <input type="password" value={this.state.registerValues['conform']} onChange={this.handleChangeevent.bind(this)} className="form-control" name="conform" placeholder="Password again" required/>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.signup.bind(this)}>Submit</button>
                </form>
            </div>
            <div className="three column"></div>
        </div>

        );
    }
}

