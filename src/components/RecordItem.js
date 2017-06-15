import React from 'react';

export default class RecordListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderRecordSection() {
        const {username, email, phone} = this.props;
        if (this.state.isEditing) {
            return (
                <tr>
                    <td>
                        <input className="form-fixer" type="text" defaultValue={ username} ref={(input) => this.name = input} required/>
                    </td>
                    <td>
                        <input className="form-fixer" type="text" defaultValue={ email} ref={(input) => this.email = input} required/>
                    </td>
                    <td>
                            <input className="form-fixer" type="text" defaultValue={ phone} ref={(input) => this.phone = input} required/>
                    </td>
                    <td>
                        <button type="submit" className="btn btn-default cancel-btn" onClick={this.onCancelClick.bind(this)}>Cancel</button>
                    </td>
                    <td>
                        <button type="submit" className="btn btn-default save-btn"onClick={this.handleUpdate.bind(this)}>Save</button>
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
                    <i className="fa fa-pencil icon" aria-hidden="true" onClick={this.onEditClick.bind(this)}></i>
                </td>
                <td className="td-space">
                    <i className="fa fa-trash-o icon" aria-hidden="true" onClick={this.handleDelete.bind(this)}></i>
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
    }

    onCancelClick() {
        this.setState({isEditing: false});
    }

    handleUpdate(event) {
        event.preventDefault();
        this.props.updateRecord (this.name.value, this.email.value, this.phone.value, this.props.id);
        this.setState({isEditing:false});
    }

    handleDelete(event){
        event.preventDefault();
        this.props.deleteRecord(this.props.id)
        this.setState({isEditing:false});


    }


}