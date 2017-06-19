/**
 * Created by surajnew55 on 24/05/2017.
 */
import React from 'react';


export default class Body extends React.Component {
    render() {
        return (
            <footer>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="six columns">
                            <table className="u-full-width">
                                <thead>
                                <tr>
                                    <th>Backend Technology</th>

                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Rails API</td>
                                </tr>
                                <tr>
                                    <td>Posgres</td>
                                </tr>
                                <tr>
                                    <td>Knock gem to handle JWT request</td>
                                </tr>
                                <tr>
                                    <td>Active model serializer(for) JSON response</td>
                                </tr>
                                <tr>
                                    <td>Heroku Cloud deployment</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="six columns">
                            <table className="u-full-width">
                                <thead>
                                <tr>
                                    <th>Frontend Technology</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>React</td>
                                </tr>
                                <tr>
                                    <td> React Router v4 </td>
                                </tr>
                                <tr>
                                    <td>Bootstrap</td>
                                </tr>
                                <tr>
                                    <td>Font awesome</td>
                                </tr>
                                <tr>
                                    <td>JWT</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
