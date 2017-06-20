/**
 * Created by surajnew55 on 12/06/2017.
 */
import React from 'react'


export default class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields:{},
            errors:{}
        };
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //name

        if(typeof fields['name'] !=='undefined'){
            if(!fields['name'].match(/^[a-zA-Z]+$/)){
                formIsValid=false;
                errors['name'] = 'Only Alphabets';
            }
        }
        //email



        if(typeof fields['email'] !=='undefined') {
            let lastAtPos = fields['email'].lastIndexOf('@');
            let lastDotPos = fields['email'].lastIndexOf('.');
            if(!(lastAtPos < lastDotPos &&lastAtPos > 0 &&
                fields['email'].indexOf('@@')=== -1 && lastAtPos > 2 && (fields['email'].length - lastDotPos) > 2)){
                formIsValid=false;
                errors['email'] = 'Email is not valid';
            }
        }
        //number
        //phone
        if(isNaN(fields['phone'])){
            formIsValid = false;
            errors['phone'] = 'Must be number';

        }
        if(fields['phone'].toString().length < 7){
            formIsValid = false;
            errors['phone'] = 'Phone must be at least 7 numbers'
        }

        this.setState({errors:errors});
        return formIsValid;
    }


    recordSubmit(e){
        e.preventDefault();

        if(this.handleValidation()) {
            this.handleCreate()
        }
        else{
            alert('Error submitting form please fix the errors')
        }
    }
    handleChange(field, e){
        let fields = this.state.fields;
        fields[field]=e.target.value;
        this.setState({fields});
    }



    render() {
        return (
            <form id="add-form" onSubmit={this.recordSubmit.bind(this)}>
                <div className="row table-row">
                    <div className="col-md-3">
                        <input className="form-fixer" type="text" placeholder="  Full name"
                               ref={(input) => this.name = input} onChange={this.handleChange.bind(this,'name')}
                               required/><br/>
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>

                    </div>
                    <div className="col-md-3">
                        <input className="form-fixer" type="text" placeholder="  E-mail address"
                               ref={(input) => this.email = input} onChange={this.handleChange.bind(this,'email')}
                               required/><br/>
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>

                    </div>
                    <div className="col-md-3">
                        <input className="form-fixer" type="text" placeholder="  Phone"
                               ref={(input) => this.phone = input} onChange={this.handleChange.bind(this,'phone')}
                               required/><br/>
                        <span style={{color: "red"}}>{this.state.errors["phone"]}</span>

                    </div>
                    <div className="col-md-1">
                    </div>

                    <div className="col-md-2">
                        <button type="submit" className="btn btn-default">Add new</button>
                    </div>
                </div>
            </form>
        );
    }

    handleCreate() {
        this.props.createRecord(this.name.value, this.email.value, this.phone.value);
        this.name.value = '';
        this.email.value = '';
        this.phone.value = '';
    }


}