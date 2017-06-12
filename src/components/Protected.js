/**
 * Created by surajnew55 on 05/06/2017.
 */
/**
 * Created by surajnew55 on 24/05/2017.
 */
import React from 'react';
import logo from '../img/log.jpg';
import Create from './Create';


export default class ProtectedApp extends React.Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="header row-protected">
                        <div className="col-md-12 col-protected">
                            <img src={logo} alt="Mountain View"/><strong> Nord Software</strong>
                        </div>
                    </div>
                    <div className="row">
                        <h6 className="header-style"><strong>List of participants</strong></h6>
                    </div>
                    <Create />

                    <br/>
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
                        <tr>
                            <td>John Doe</td>
                            <td>john@example.com</td>
                            <td>1234567890</td>
                            <td className="td-space"><i className="fa fa-pencil btn" aria-hidden="true"></i>
                            </td>
                            <td className="td-space"><i className="fa fa-trash-o btn " aria-hidden="true"></i></td>

                        </tr>
                        <tr>
                            <td>Mary Johanson</td>
                            <td>mary@example.com</td>
                            <td>1234567890</td>
                            <td></td>
                            <td></td>

                        </tr>
                        <tr>
                            <td>July Cooper</td>
                            <td>july@example.com</td>
                            <td>1234567890</td>
                            <td></td>
                            <td></td>

                        </tr>
                        </tbody>
                    </table>

                </div>

                {/*<div className="container">
                 <div className="container-header">
                 <br/>
                 <div className=" color-bg">
                 <div className="row row-protected">
                 <div className="col-md-12 col-protected">
                 <img src={logo} alt="Mountain View"/><strong> Nord Software</strong>
                 </div>
                 </div>
                 </div>
                 <div className=" color-bg1">
                 <h6 className="header-style"><strong>List of participants</strong></h6>
                 <div className="container-row entrybox">
                 <div className=" table-row">
                 </div>
                 </div>
                 <br/>
                 <div className="container entrybox">
                 <div className="table-row-list">
                 <div className="table-responsive">
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
                 <tr>
                 <td>Johnzkxjvklajksjdflkjklasjdflkjaksjdfjasl</td>
                 <td>john@example.com</td>
                 <td>1234567890</td>
                 <td className="td-space"><i className="fa fa-pencil" aria-hidden="true"></i>
                 </td>
                 <td><i className="fa fa-trash-o" aria-hidden="true"></i></td>

                 </tr>
                 <tr>
                 <td>Mary</td>
                 <td>mary@example.com</td>
                 <td>1234567890</td>
                 <td></td>
                 <td></td>

                 </tr>
                 <tr>
                 <td>July</td>
                 <td>july@example.com</td>
                 <td>1234567890</td>
                 <td></td>
                 <td></td>

                 </tr>
                 </tbody>
                 </table>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>
                 </div>*/}
            </div>
        );
    }
}