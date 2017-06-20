/**
 * Created by surajnew55 on 12/06/2017.
 */
import React from 'react'


export default class Create extends React.Component {

    render() {
        return (
            <form id="add-form" onSubmit={this.handleCreate.bind(this)}>
                <div className="row table-row">
                    <div className="col-md-3">
                        <input className="form-fixer" type="text" placeholder="  Full name"
                               ref={(input) => this.name = input}
                               required/>
                    </div>
                    <div className="col-md-3">
                        <input className="form-fixer" type="text" placeholder="  E-mail address"
                               ref={(input) => this.email = input}
                               required/>
                    </div>
                    <div className="col-md-3">
                        <input className="form-fixer" type="text" placeholder="  Phone"
                               ref={(input) => this.phone = input}
                               required/>
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

    handleCreate(event) {
        event.preventDefault();
        this.props.createRecord(this.name.value, this.email.value, this.phone.value);
        this.name.value = '';
        this.email.value = '';
        this.phone.value = '';
    }


}