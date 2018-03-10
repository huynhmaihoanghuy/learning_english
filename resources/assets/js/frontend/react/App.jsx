import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import addWordStore from './stores/vocabulary/add_word';
import practiceStore from './stores/vocabulary/practice';
import LeanVocabulary from './containers/vocabulary/LeanVocabulary';
import PracticeVocabulary from './containers/vocabulary/Practice';

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