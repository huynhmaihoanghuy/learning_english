import React, {Component} from 'react';
import {connect} from 'react-redux';
import LearningWord from '../../components/vocabulary/practice/LearningWord';
import {getWordByDate} from '../../actions/vocabulary/practice/learningWord';

const PracticeVocabulary = (props) => {
    let {getWordsByDate} = props;
    return (
        <div>
            <LearningWord newWord="ABCDEF" onGetWordsByDate={getWordsByDate}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state);
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getWordsByDate: (date) => {
            dispatch(getWordByDate(date));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PracticeVocabulary);