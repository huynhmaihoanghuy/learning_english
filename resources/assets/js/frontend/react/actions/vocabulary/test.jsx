import * as types from '../../action_types/vocabulary';

export const getWordRandom = () => {
    return dispatch => {
        axios.get(laroute.route('frontend.vocabulary.get-word-random'))
            .then(response => {
                if (response.data.result === 'ok') {
                    dispatch({
                        type: types.ADD_WORD_BY_TEST,
                        payload: response.data.data
                    });
                } else {
                    swal('Oops...!', response.message, response.status);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
};

export const testWord = (data) => {
    return dispatch => {
        axios.post(laroute.route('frontend.vocabulary.test-word'), data)
            .then(response => {
                if (response.data.result === 'ok') {
                    dispatch({
                        type: types.TEST_WORD,
                        payload: response.data.data
                    });
                } else {
                    swal('Oops...!', response.message, response.status);
                }
            })
            .catch(error => {
                swal('Oop...!', error, 'error');
            })
    }
};
