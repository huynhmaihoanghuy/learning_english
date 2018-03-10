import React, {Component} from 'react';
import Note from '../../../elements/vocabulary/practice/Note';
import Result from '../../../elements/vocabulary/practice/Result';
import Notification from '../../../elements/vocabulary/practice/Notification';

class LearningWord extends Component {
    constructor() {
        super();

        this.state = {
            text: '',
            results: [],
            error: '',
            isValid: false
        };

        this.onTextChange = this.onTextChange.bind(this);
        this.onTextCheck = this.onTextCheck.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
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
            if (text.toLowerCase() === this.props.newWord.toLowerCase()) {
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

    componentDidMount() {
        let date = '09-03-2018';
        this.props.onGetWordsByDate(date);
    }

    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    New word: <span className="new-word-practice">{this.props.newWord}</span>

                    <Notification number={this.state.results.length}/>
                </div>
                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-3 col-md-push-9">
                            <Note />
                        </div>

                        <div className="col-md-9 col-md-pull-3">
                            <Result data={this.state.results || []}/>

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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LearningWord;