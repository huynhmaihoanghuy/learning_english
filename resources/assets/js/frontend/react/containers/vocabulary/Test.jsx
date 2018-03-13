import React from 'react';
import {connect} from 'react-redux';
import TestBox from "../../components/vocabulary/TestBox";
import {getWordRandom} from "../../actions/vocabulary/test";

const Test = (props) => {
    let {getWordForTest, word} = props;
    return (
        <div>
            <TestBox data={word} onGetWordForTest={getWordForTest}/>
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
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);