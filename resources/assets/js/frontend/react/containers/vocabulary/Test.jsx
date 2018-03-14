import React from 'react';
import {connect} from 'react-redux';
import TestBox from "../../components/vocabulary/TestBox";
import {getWordRandom, testWord} from "../../actions/vocabulary/test";

const Test = (props) => {
    let {getWordForTest, word, testWord} = props;
    return (
        <div>
            <TestBox data={word} onGetWordForTest={getWordForTest} onTestWord={testWord}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        word: state.testReducer
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getWordForTest: () => {
            dispatch(getWordRandom());
        },
        testWord: (data) => {
            dispatch(testWord(data));
            dispatch(getWordRandom());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);