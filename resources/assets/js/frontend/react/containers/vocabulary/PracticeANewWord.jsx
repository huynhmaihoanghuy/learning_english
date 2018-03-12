import React from 'react';
import {connect} from 'react-redux';
import LearningBox from "../../elements/vocabulary/practice/LearningBox";
import {onFinished} from "../../actions/vocabulary/practice/learningWord";

const PracticeANewWordVocabulary = (props) => {
    let word = lv.wordData;
    let {onFinished} = props;
    return (
        <div>
            <LearningBox key={word.id} data={word} onFinished={onFinished} mode="practice" />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFinished: (id) => {
            onFinished(id);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PracticeANewWordVocabulary);

