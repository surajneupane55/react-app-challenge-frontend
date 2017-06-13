/**
 * Created by surajnew55 on 12/06/2017.
 */
import React from 'react'


export default class Show extends React.Component {

        render() {
        const records = this.props.allRecord;
        const listItems = records.map((record) =>
            <tr key={record.id}>
                <td>
                    {record.username}
                </td>
                <td>
                    {record.email}
                </td>
                <td>
                    {record.phone}
                </td>
                <td className="td-space"><i className="fa fa-pencil btn" aria-hidden="true"></i>
                </td>
                <td className="td-space"><i className="fa fa-trash-o btn " aria-hidden="true"></i></td>
            </tr>
        );


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
                <tbody>
                {listItems}
                </tbody>
            </table>
        );
    }

}
