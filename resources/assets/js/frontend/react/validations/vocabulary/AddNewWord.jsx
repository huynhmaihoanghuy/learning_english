import validator from 'validator';

export const AddNewWordValidation = (data) => {

    let errors = {};

    if(validator.isEmpty(data.word)) {
        errors.word = 'This field is required';
    }

    if(validator.isEmpty(data.description)) {
        errors.description = 'This field is required';
    }

    return {
        errors,
        isValid: _.isEmpty(errors)
    }

};