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
            isSorted: false
        }
    }

    renderRecord() {
        if (this.state.isSorted) {
            return _.map(this.sortByName(), (record) => <RecordListItem key={record.id} {...record}
                                                                        updateRecord={this.props.updateRecord}
                                                                        deleteRecord={this.props.deleteRecord}/>);
        }

        else {
            return _.map(this.props.records, (record) => <RecordListItem key={record.id} {...record}
                                                                         updateRecord={this.props.updateRecord}
                                                                         deleteRecord={this.props.deleteRecord}/>);
        }

    }


    sortByName() {

        var itemsList = [];
        _.map(this.props.records, (record) => itemsList.push(record));
        itemsList.sort(function (a, b) {

            //join first+last name and apply toLowerCase and compare

            return (a.username.replace(/\s+/g, "").toLowerCase() <b.username.replace(/\s+/g, "").toLowerCase()) ? -1 : (a.username.replace(/\s+/g, "").toLowerCase() > b.username.replace(/\s+/g, "").toLowerCase()) ? 1 : 0;

        });
        return itemsList;

    }

    sortedList() {
        this.setState({isSorted: !this.state.isSorted})
    }



    render() {


        return (
            <table>
                <thead>
                <tr>
                    <th>Name
                        <button className="button"><i className="fa fa-arrow-down arrow" aria-hidden="true"
                                                      onClick={this.sortedList.bind(this)}></i></button>
                    </th>
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
}
