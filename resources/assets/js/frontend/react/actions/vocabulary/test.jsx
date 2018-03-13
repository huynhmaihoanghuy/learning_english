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
