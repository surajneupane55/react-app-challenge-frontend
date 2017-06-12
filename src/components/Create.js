/**
 * Created by surajnew55 on 12/06/2017.
 */
import React from 'react'






export default class Create extends React.Component {
    render() {
        return (
            <form id="add-form" onsubmit={this.handleSubmit}>
                <div className="row table-row">
                    <div className="col-md-3">
                        <input className="form-fixer" type="text" placeholder="  Full name" name="name"
                               required/>
                    </div>
                    <div className="col-md-3">
                        <input className="form-fixer" type="text" placeholder="  E-mail address" name="name"
                               required/>
                    </div>
                    <div className="col-md-3">
                        <input className="form-fixer" type="text" placeholder="  Phone" name="name" required/>
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
}