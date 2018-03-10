import * as types from '../../action_types/vocabulary';

export const onAddNewWord = (data) => {
    return dispatch => {
        axios.post(laroute.route('frontend.vocabulary.add-new-word'), data)
            .then(response => {
                if (response.data.result === 'ok') {
                    dispatch({
                        type: types.ADD_NEW_WORD,
                        payload: response.data.data
                    });
                    dispatch(addNewWordReceive());
                } else {
                    swal('Oops...!', response.message, response.status);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }
};

export const addNewWordRequest = () => {
    return {
        type: types.REQUEST_ADD_NEW_WORD
    }
};

export const addNewWordReceive = () => {
    return {
        type: types.RECEIVE_ADD_NEW_WORD
    }
};