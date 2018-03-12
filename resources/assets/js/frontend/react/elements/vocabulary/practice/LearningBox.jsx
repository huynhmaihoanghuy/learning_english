import React , {Component} from 'react';
import Notification from "./Notification";
import Note from './Note';
import Result from './Result';

class LearningBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            results: [],
            error: '',
            isValid: false,
            mode: props.mode || 'normal'
        };

        this.onTextCheck = this.onTextCheck.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        this.state.mode = nextProps.mode || 'normal';
        this.setState(this.state);
    }

    onTextChange(e) {
        this.state.text = e.target.value;
        this.setState(this.state);
    }

    onKeyPress(e) {
        if (e.charCode === 13) {
            this.onTextCheck();
        }
    }

    onTextCheck() {
        let text = this.state.text;
        if (text !== '') {
            if (text.toLowerCase() === this.props.data.word.toLowerCase()) {
                this.state.results.push(text);
                this.state.text = '';
                this.state.isValid = false;
                this.state.error = '';
                this.setState(this.state);
            } else {
                this.state.isValid = true;
                this.state.error = 'Mismatched';
                this.setState(this.state);
            }
        }
    }

    render() {
        let result = this.state.results;
        if (this.props.data.is_practiced && result.length === 0 && this.state.mode === 'normal') {
            for (let i=0; i<20; i++) {
                result.push(this.props.data.word);
            }
        }

        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    New word: <span className="new-word-practice">{this.props.data.word}</span>

                    <Notification number={this.state.results.length} onFinished={this.props.onFinished} id={this.props.data.id} isPracticed={this.props.data.is_practiced}/>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-3 col-md-push-9">
                            <Note />
                        </div>

                        <div className="col-md-9 col-md-pull-3">
                            <div className="relative-position">
                                <Result data={result || []}/>

                                <div className="">
                                    <div className="form-group">
                                        <label htmlFor="practice_1">Practice</label>
                                        <div className="relative-position">
                                            <input type="text" id="practice_1" className="form-control" value={this.state.text} onChange={this.onTextChange} onKeyPress={this.onKeyPress}/>
                                            <div className="btn-text-check-box">
                                                <button className="btn btn-primary" onClick={this.onTextCheck}>Check</button>
                                            </div>
                                        </div>
                                        {this.state.isValid && <span className="error red">{ this.state.error }</span>}
                                    </div>
                                </div>

                                {
                                    (result.length >= 20) ? (
                                        <div className="bg-finished-box">
                                            <div className="finish-text">Finished</div>
                                        </div>
                                    ) : (
                                        <div> </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LearningBox;