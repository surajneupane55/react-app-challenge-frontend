/**
 * Created by surajnew55 on 25/05/2017.
 */
import React from 'react';
import Auth from '../services/AuthService'


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           formValues: {}
        };
    }

    handleChange(event) {
        event.preventDefault();
        let formValues = this.state.formValues;
        let name = event.target.name;
        let value = event.target.value;

        formValues[name] = value;
        this.setState({formValues})
    }


     login(e) {
        e.preventDefault();
        Auth.login(this.state.formValues.email, this.state.formValues.password)
            .catch(function (err) {
                alert("There's an error logging in");
                console.log("Error logging in", err)
            });
    }

    render() {
        return(
        <div className="row">
            <div className="four columns"></div>
            <div className="four columns">
                    <h1>Login</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input name='email' type="text" value={this.state.formValues['email']} onChange={this.handleChange.bind(this)} className="form-control "
                                   placeholder="Email" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input name="password" type="password" value={this.state.formValues['password']} onChange={this.handleChange.bind(this)}  className="form-control" placeholder="Password" required/>
                        </div>
                        <button type="submit" className="btn btn-default" onClick={this.login.bind(this)}>Submit</button>
                    </form>
            </div>
            <div className="four columns"></div>
        </div>
        );
    }
}





