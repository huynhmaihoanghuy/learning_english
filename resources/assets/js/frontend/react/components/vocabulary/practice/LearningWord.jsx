import React, {Component} from 'react';
import LearningBox from '../../../elements/vocabulary/practice/LearningBox';
import moment from "moment/moment";

class LearningWord extends Component {
    constructor() {
        super();
    }


    componentDidMount() {
        let date = moment(lv.date_for_learn).format('MM/DD/YYYY');
        this.props.onGetWordsByDate(date);
    }

    render() {
        return (
            <div>

                {
                    this.props.words.map(word => {
                        return <LearningBox key={word.id} data={word} onFinished={this.props.onFinished}/>
                    })
                }

            </div>
        )
    }
}

export default LearningWord;