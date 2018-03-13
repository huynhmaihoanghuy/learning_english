import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import addWordStore from './stores/vocabulary/add_word';
import practiceStore from './stores/vocabulary/practice';
import practiceANewWordStore from './stores/vocabulary/practice_a_new_word';
import testStore from './stores/vocabulary/test';
import LeanVocabulary from './containers/vocabulary/LeanVocabulary';
import PracticeVocabulary from './containers/vocabulary/Practice';
import PracticeANewWordVocabulary from './containers/vocabulary/PracticeANewWord';
import Test from './containers/vocabulary/Test';

if(document.getElementById('learn_vocabulary')) {
    render(
        <Provider store={ addWordStore }>
            <LeanVocabulary/>
        </Provider>,
        document.getElementById('learn_vocabulary')
    );
}

if(document.getElementById('practice_vocabulary')) {
    render(
        <Provider store={ practiceStore }>
            <PracticeVocabulary/>
        </Provider>,
        document.getElementById('practice_vocabulary')
    );
}

if(document.getElementById('practice_a_new_word')) {
    render(
        <Provider store={ practiceANewWordStore }>
            <PracticeANewWordVocabulary/>
        </Provider>,
        document.getElementById('practice_a_new_word')
    );
}

if(document.getElementById('test_vocabulary')) {
    render(
        <Provider store={ testStore }>
            <Test/>
        </Provider>,
        document.getElementById('test_vocabulary')
    );
}