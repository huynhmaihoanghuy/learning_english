import React, {Component} from 'react';
import TestResult from "../../elements/vocabulary/test/TestResult";

class TestBox extends Component {
    constructor() {
        super();

        this.state = {
            error: '',
            input: '',
            total: 0,
            isLoading: false
        };

        this.checkWordMean = this.checkWordMean.bind(this);
        this.checkWordMeanButton = this.checkWordMeanButton.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let total = this.state.total;

        this.state.isLoading = false;
        this.state.input = '';
        this.state.total = total + 1;
        this.setState(this.state);
    }

    changeInput(e) {
        this.state.input = e.target.value;
        this.setState(this.state);
    }

    checkWordMean(e) {
        if (e.charCode === 13) {
            this.checkWordMeanProcess();
        }
    }

    checkWordMeanButton() {
        this.checkWordMeanProcess();
    }

    checkWordMeanProcess() {
        let mean = this.props.data.description;
        let input = this.state.input;
        let meanArray = mean.split('|');
        let isMatch = 0;
        let requestData = {};

        meanArray.forEach((mean) => {
            if(mean.toLocaleLowerCase().trim() === input.toLowerCase().trim()) {
                isMatch = 1;
            }
        });

        if (isMatch) {
            this.state.error = '';
            this.state.isLoading = true;
            this.setState(this.state);

            requestData = {
                word_id: this.props.data.id,
                mean: this.state.input,
                status: 1
            };
        } else {
            this.state.error = 'Error';
            this.setState(this.state);

            requestData = {
                word_id: this.props.data.id,
                mean: this.state.input,
                status: 0
            };
        }

        this.props.onTestWord(requestData);
    }

    onAddNewWord() {
        window.location.href = laroute.route('frontend.vocabulary.learn');
    }

    render() {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        Total: <span className="">{this.state.total}/20</span>
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
                                        <input type="text" className="form-control" value={this.state.input} onChange={this.changeInput} onKeyPress={this.checkWordMean}/>
                                        {this.state.error !== '' ? (<span className="error red">{this.state.error}</span>) : (<span> </span>)}
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-primary" onClick={this.checkWordMeanButton}>
                                            {
                                                this.state.isLoading ? (
                                                    <i className="fa fa-spin fa-spinner"> </i>
                                                ) : (
                                                    <span>Next &nbsp; <i className="fa fa-angle-right"> </i></span>
                                                )
                                            }
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    this.state.total >= 20 ? (
                        <div className="">
                            <button className="btn btn-primary width-all" onClick={this.onAddNewWord}>Add new word</button>
                        </div>
                    ) : (
                        <div className="">
                            <button className="btn btn-default width-all">Add new word</button>
                        </div>
                    )
                }

                <br/>

                <TestResult/>
            </div>
        )
    }

    componentDidMount() {
        this.props.onGetWordForTest();
    }
}

export default TestBox;