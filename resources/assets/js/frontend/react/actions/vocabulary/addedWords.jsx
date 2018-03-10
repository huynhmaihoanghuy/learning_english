import * as types from '../../action_types/vocabulary';

export const getAddedWordsByDate = (date) => {
    return dispatch => {
        axios.get(laroute.route('frontend.vocabulary.get-word-by-date'), {
            params: {
                date
            }
        })
            .then(response => {
                let data = response.data;
                if (data.result === 'ok') {
                    dispatch({
                        type: types.GET_ADDED_WORD_LIST,
                        payload: data.data
                    });
                } else {
                    swal('Oops...!', data.message, data.status);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
};

export const removeWord = (wordId) => {
    return dispatch => {
        axios.post(laroute.route('frontend.vocabulary.remove-word'), {
            word_id: wordId
        })
            .then(response => {
                swal.close();
                let data = response.data;
                if (data.result === 'ok') {
                    dispatch({
                        type: types.REMOVE_WORD,
                        payload: wordId
                    });
                } else {
                    swal('Oops...!', data.message, data.status);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
};