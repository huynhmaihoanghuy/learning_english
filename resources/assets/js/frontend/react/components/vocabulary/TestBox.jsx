import React, {Component} from 'react';

class TestBox extends Component {
    constructor() {
        super();

        this.state = {
            error: ''
        };

        this.checkWordMean = this.checkWordMean.bind(this);
    }

    checkWordMean(e) {
        if (e.charCode === 13) {
            let mean = this.props.data.description;
            let input = e.target.value;
            let meanArray = mean.split('|');
            let isMatch = 0;

            meanArray.forEach((mean) => {
                if(mean.toLocaleLowerCase().trim() === input.toLowerCase().trim()) {
                    isMatch = 1;
                }
            });

            if (isMatch) {
                console.log('Match');
            } else {
                this.state.error = 'No Match';
            }
        }
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    Total: <span className="">0/20</span>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="">
                                <label>Word</label>
                                <div className="word-in-test">{this.props.data.word || 'Loading...'}</div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="">
                                <label>Mean</label>
                                <div className="form-group">
                                    <input type="text" className="form-control" onKeyPress={this.checkWordMean}/>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-primary">Next &nbsp; <i className="fa fa-angle-right"> </i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.onGetWordForTest();
    }
}

export default TestBox;