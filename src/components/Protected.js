/**
 * Created by surajnew55 on 05/06/2017.
 */
/**
 * Created by surajnew55 on 24/05/2017.
 */
import React from 'react';
import logo from '../img/nord_logo.jpg';
import Create from './CreateRecord';
import Show from './ShowRecord';
import axios from 'axios';
import LoginActions from './LoginActions';


export default class ProtectedApp extends React.Component {

    constructor() {
        super();
        this.state = {
            listRecord: []
        };
    }


    createRecord(name, email, phone) {
        const config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('jwt')}
        };
        const record = {
            'record': {
                'username': name,
                'email': email,
                'phone': phone
            }

        };

        if (LoginActions.loggedIn()) {
            let self = this;

            axios.post('https://arcane-oasis-17502.herokuapp.com/records',
                record,
                config
            )
                .then(function () {
                    self.backendCall();
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        else {
            this.props.history.push('/login')
        }
    }

    componentWillMount() {
        if (LoginActions.loggedIn()) {
            this.backendCall();
        }


    }

    backendCall() {
        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('jwt')}
        };


        axios.get('https://arcane-oasis-17502.herokuapp.com/records', config
        )
            .then((response) => {
            this.updateState(response);
            })
            .catch((error) => {
                console.log(error);
            })

    }
    updateState(response){
        this.setState({
            listRecord: response.data
        });

    }


    updateRecord(name, email, phone, id) {
        const config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('jwt')}
        };
        const record = {
            'record': {
                'username': name,
                'email': email,
                'phone': phone
            }

        };
        if (LoginActions.loggedIn()) {

            let self = this;
            const baseURL = 'https://arcane-oasis-17502.herokuapp.com/records/';
            axios.patch(baseURL + id,
                record,
                config
            )
                .then(function () {
                    self.backendCall();
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        else {
            this.props.history.push('/login')
        }
    }

    deleteRecord(id) {
        const config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem('jwt')}
        };
        if (LoginActions.loggedIn()) {

            let self = this;
            const baseURL = 'https://arcane-oasis-17502.herokuapp.com/records/';
            axios.delete(baseURL + id, config)
                .then(function () {
                    self.backendCall();
                })
                .catch((error) => {
                    console.log(error);
                })

        }
        else {

            this.props.history.push('/login')
        }

    }

    logOut() {
        const jwt = localStorage;
        if (jwt !== '') {
            localStorage.removeItem('jwt');
            this.props.history.push('/')


        }
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="header row-protected">
                        <div className="col-md-8 col-protected">
                            <img src={logo} alt="Mountain View"/><strong> Nord Software</strong>
                        </div>
                        <div className="col-md-2 col-protected">
                            <button type="submit" className="btn btn-default out-btn" onClick={this.logOut.bind(this)}>
                                LogOut
                            </button>
                        </div>

                    </div>
                    <div className="row">
                        <h6 className="header-style"><strong>List of participants</strong></h6>
                    </div>
                    <Create createRecord={this.createRecord.bind(this)}/>

                    <br/>
                    <Show records={this.state.listRecord} updateRecord={this.updateRecord.bind(this)}
                          deleteRecord={this.deleteRecord.bind(this)}/>

                </div>


            </div>
        );
    }
}