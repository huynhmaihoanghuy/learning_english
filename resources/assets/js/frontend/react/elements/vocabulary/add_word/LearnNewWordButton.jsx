import moment from "moment/moment";
import React, {Component} from "react";

class LearnNewWordButton extends Component {
    constructor() {
        super();

        this.state = {
            limitToLearn: 5
        };

        this.learnNewWord = this.learnNewWord.bind(this);
    }

    learnNewWord() {
        if (this.props.total < this.state.limitToLearn) {
            swal('Oops...!', 'Please add '+ (this.state.limitToLearn - this.props.total) +' new word to start learn', 'warning');
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.total >= this.state.limitToLearn ? (
                        <a href={ laroute.route('frontend.vocabulary.practice', {date: moment().format('MM-DD-Y')}) }>
                            <button className="btn btn-primary full-width">
                                <span>Learn</span>
                            </button>
                        </a>
                    ) : (
                        <button className="btn btn-default full-width" onClick={ this.learnNewWord }>
                            <span>Please add { this.state.limitToLearn - this.props.total } new word to start learn</span>
                        </button>
                    )
                }
            </div>
        )
    }
}

export default LearnNewWordButton;