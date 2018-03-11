<?php

Route::group(['namespace' => 'Vocabulary', 'as' => 'vocabulary.', 'prefix' => 'vocabulary'], function () {
    Route::get('learn', 'VocabularyController@index')->name('learn');
    Route::get('learn/{date}/practice', 'VocabularyController@practiceWord')->name('practice');
    Route::get('get-word-by-date', 'VocabularyController@getWordByDate')->name('get-word-by-date');

    Route::post('add-new-word', 'VocabularyController@addNewWord')->name('add-new-word');
    Route::post('remove-word', 'VocabularyController@removeWord')->name('remove-word');
    Route::get('update-practiced', 'VocabularyController@updatePracticed')->name('update-practiced');
});