import React, {Component} from 'react';
import {connect} from 'react-redux';
import LearningWord from '../../components/vocabulary/practice/LearningWord';
import {getWordByDate, onFinished} from '../../actions/vocabulary/practice/learningWord';

const PracticeVocabulary = (props) => {
    let {getWordsByDate, words, onFinished} = props;
    return (
        <div>
            <LearningWord words={words} onGetWordsByDate={getWordsByDate} onFinished={onFinished}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        words: state.learningReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getWordsByDate: (date) => {
            dispatch(getWordByDate(date));
        },
        onFinished: (id) => {
            onFinished(id);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PracticeVocabulary);