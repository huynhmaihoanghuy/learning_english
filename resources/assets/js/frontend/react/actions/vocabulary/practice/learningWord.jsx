import * as types from '../../../action_types/vocabulary';

export const getWordByDate = (date) => {
    return dispatch => {
        axios.get(laroute.route('frontend.vocabulary.get-word-by-date'), {
            params: {
                date: date
            }
        }).then(response => {
            let data = response.data;
            if (data.result === 'ok') {
                dispatch({
                    type: types.GET_WORDS_BY_DATE,
                    payload: data.data
                });
            } else {
                swal('Oops...!', data.message, data.status);
            }
        });
    }
};

export const onFinished = (id) => {
      return axios.get(laroute.route('frontend.vocabulary.update-practiced'), {
          params: {
              id: id
          }
      }).then(response => {
         console.log(response);
      });
};