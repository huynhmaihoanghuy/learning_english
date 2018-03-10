import React, {Component} from 'react';
import moment from 'moment';

class RemoveWordAction extends Component {
    constructor() {
        super();

        this.removeWordAction = this.removeWordAction.bind(this);
    }

    removeWordAction() {
        swal({
                title: "Are you sure?",
                text: "Your will not be able to recover this imaginary file!",
                type: "warning",
                showCancelButton: true,
                confirmButtonClass: "btn-danger",
                confirmButtonText: "Yes, delete it!",
                closeOnConfirm: false,
                showLoaderOnConfirm: true
            }, () => {
                this.props.removeWord(this.props.data.id);
            });
    }

    render() {
        return (
            <div className="text-center">
                <a href="#" onClick={this.removeWordAction}><i className="fa fa-remove"> </i></a>
            </div>
        )
    }
}

class LearnNewWord extends Component {
    constructor(props) {
        super(props);

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

class AddedWord extends Component {
    render() {
        let {addedWordArray} = this.props;
        return (
            <div className="main-box">
                <div className="title">
                    <span>Added words</span>
                    <span className="full-right">{ moment().format('MM/DD/Y') }</span>
                </div>

                <div className="">
                    <table className="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th className="text-center" width="10%">#</th>
                            <th className="text-center" width="25%">Word</th>
                            <th className="text-center" width="40%">Description</th>
                            <th className="text-center" width="15%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            addedWordArray.length > 0 ? (
                                addedWordArray.map((value, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className="text-center">{ index+1 }</td>
                                            <td>{ value.word }</td>
                                            <td>{ value.description }</td>
                                            <td>
                                                <RemoveWordAction data={value} removeWord={this.props.removeWord}/>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td className="text-center" colSpan="4">
                                        No data
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

                <LearnNewWord total={addedWordArray.length}/>

            </div>
        )
    }

    componentDidMount() {
        let date = moment().format('MM/DD/Y');
        this.props.getAddedWordsByDate(date);
    }
};

// AddedWord.prototype = {
//     addedWordArray: PropTypes.array.isRequired
// };

export default AddedWord;