import React, {Component} from 'react';
import { connect } from 'react-redux';
import {onAddNewWord} from '../../actions/vocabulary/addNewWord';
import AddNewWord from '../../components/vocabulary/AddNewWord';
import AddedWord from '../../components/vocabulary/AddedWord';
import {getAddedWordsByDate, removeWord} from '../../actions/vocabulary/addedWords';
import {addNewWordRequest} from '../../actions/vocabulary/addNewWord';

const LeanVocabulary = (props) => {
    let {empty, addedWord, onAddNewWord, getAddedWordsByDate, removeWord, isFetching} = props;
    return (
        <div className="row">
            <div className="col-md-5">
                <AddNewWord onAddNewWord={onAddNewWord} empty={empty} isFetching={isFetching}/>
            </div>
            <div className="col-md-7">
                <AddedWord addedWordArray={addedWord} getAddedWordsByDate={getAddedWordsByDate} removeWord={removeWord}/>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        empty: state.addNewWordReducer,
        addedWord: state.addedWordReducer,
        isFetching: state.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNewWord: (payload) => {
            dispatch(addNewWordRequest());
            dispatch(onAddNewWord(payload));
        },
        getAddedWordsByDate: (date) => {
            dispatch(getAddedWordsByDate(date));
        },
        removeWord: (wordId) => {
            dispatch(removeWord(wordId));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeanVocabulary);