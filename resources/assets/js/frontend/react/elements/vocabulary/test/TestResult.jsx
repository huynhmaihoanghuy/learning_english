import React, {Component} from 'react';

class TestResult extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Result
                </div>
                <div className="panel-body">
                    <div className="">
                        <table className="table table-bordered">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Date</th>
                                <th>Word</th>
                                <th>Mean</th>
                                <th>Status</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>#</td>
                                <td>Date</td>
                                <td>Word</td>
                                <td>Mean</td>
                                <td>Status</td>
                            </tr>
                            <tr>
                                <td>#</td>
                                <td>Date</td>
                                <td>Word</td>
                                <td>Mean</td>
                                <td>Status</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default TestResult;