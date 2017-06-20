import React from 'react';

export default class RecordListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false,
            fields:{
                name:this.props.username,
                email:this.props.email,
                phone:this.props.phone
            },
            errors:{}
        };
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //name
        if(!fields['name']) {
            formIsValid = false;
            errors['name']='Cannot be empty';
        }
        if(typeof fields['name'] !== "undefined"){
            if(!fields['name'].match(/^[a-z ,.'-]+$/i)){
                formIsValid=false;
                errors['name'] = 'Name must be alphabets';
            }
        }
        //email

        if(!fields['email']){
            formIsValid = false;
            errors['email']='Cannot be empty';
        }
        if(typeof fields['email'] !== 'undefined') {
            let lastAtPos = fields['email'].lastIndexOf('@');
            let lastDotPos = fields['email'].lastIndexOf('.');
            if(!(lastAtPos < lastDotPos &&lastAtPos > 0 &&
                fields['email'].indexOf('@@')=== -1 && lastAtPos > 2 && (fields['email'].length - lastDotPos) > 2)){
                formIsValid=false;

                errors['email'] = 'Email is not valid';
            }
        }
        //phone

        if(!fields['phone']){
                formIsValid = false;
                errors['phone']='Phone cannot be empty';
            }
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
            this.handleUpdate()
        }else{
            alert('Please input correct value in your Form.')
        }
    }
    handleChange(field, e){
        let fields = this.state.fields;
        fields[field]=e.target.value;
        this.setState({fields});
    }

    renderRecordSection() {
        const {username, email, phone} = this.props;
        if (this.state.isEditing) {
            return (
                <tr>
                    <td>
                        <input className="form-fixer" type="text"
                               ref={(input) => this.name = input} onChange={this.handleChange.bind(this,"name")} value={this.state.fields['name']} /><br/>
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                    </td>
                    <td>
                        <input className="form-fixer" type="text"
                               ref={(input) => this.email = input} onChange={this.handleChange.bind(this, "email")} value={this.state.fields['email']} /><br/>
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                    </td>
                    <td>
                        <input className="form-fixer" type="text"
                               ref={(input) => this.phone = input} onChange={this.handleChange.bind(this, "phone")} value={this.state.fields['phone']} /><br/>
                        <span style={{color: "red"}}>{this.state.errors["phone"]}</span>
                    </td>
                    <td>
                        <button type="submit" className="btn btn-default cancel-btn"
                                onClick={this.onCancelClick.bind(this)}>Cancel
                        </button>
                    </td>
                    <td>
                        <button type="submit" className="btn btn-default save-btn"
                                onClick={this.recordSubmit.bind(this)}  >Save
                        </button>
                    </td>
                </tr>
            );

        }
        return (

            <tr>
                <td>
                    {username}
                </td>
                <td>
                    {email}
                </td>
                <td>
                    {phone}
                </td>

                <td className="td-space">
                    <button className="button"><i className="fa fa-pencil icon" aria-hidden="true"
                                                  onClick={this.onEditClick.bind(this)}></i></button>
                </td>
                <td className="td-space">
                    <button className="button"><i className="fa fa-trash-o icon" aria-hidden="true"
                                                  onClick={this.handleDelete.bind(this)}></i></button>
                </td>
            </tr>

        );
    }


    render() {
        return (
            <tbody>
            {this.renderRecordSection()}
            </tbody>


        );
    }


    onEditClick() {
        this.setState({isEditing: true});
        this.setState({fields:
            {
                name:this.props.username,
                email:this.props.email,
                phone:this.props.phone
        }});
        this.setState({errors:{}});
    }

    onCancelClick() {
        this.setState({isEditing: false});
        this.setState({fields:
            {
                name:this.props.username,
                email:this.props.email,
                phone:this.props.phone
            }});
        this.setState({errors:{}});

    }

    handleUpdate() {
        this.props.updateRecord(this.name.value, this.email.value, this.phone.value, this.props.id);
        this.setState({isEditing: false});
    }

    handleDelete(event) {
        event.preventDefault();
        this.props.deleteRecord(this.props.id)
        this.setState({isEditing: false});


    }


}