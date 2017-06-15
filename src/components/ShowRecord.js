/**
 * Created by surajnew55 on 12/06/2017.
 */
import React from 'react'
import _ from 'lodash'
import RecordListItem from './RecordItem'



export default class Show extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }
    renderRecord() {
        return _.map(this.props.records, (record) => <RecordListItem key={record.id} {...record} updateRecord={this.props.updateRecord} deleteRecord={this.props.deleteRecord} />);
    }


        render() {

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email-address</th>
                    <th>Phone number</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>
                {this.renderRecord()}
            </table>
        );
    }


    onEditClick() {
        this.setState({ isEditing: true });
    }

}
