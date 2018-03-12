import React, {Component} from 'react';

class LearnANewWord extends Component {
    render() {
        return (
            <div className="text-center display-inline-block">
                <a href={laroute.route('frontend.vocabulary.practice-a-word', {wordId: this.props.data.id})}><i className="fa fa-chevron-circle-right"> </i></a>
            </div>
        )
    }
}

export default LearnANewWord;