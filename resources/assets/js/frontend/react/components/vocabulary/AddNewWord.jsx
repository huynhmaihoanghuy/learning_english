import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AddNewWordValidation} from "../../validations/vocabulary/AddNewWord";
import moment from 'moment';

class AddNewWord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            word: '',
            description: '',
            date: moment().format('MM/DD/Y'),
            isValid: false,
            errors: []
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onAdd = this.onAdd.bind(this);
    }

    onInputChange(e) {
        this.state[e.target.name] = e.target.value;
        this.setState(this.state);
    }

    onAdd() {
        let data = Object.assign({},this.state);
        let {errors, isValid} = AddNewWordValidation(data);
        this.state.errors = errors;
        this.state.isValid = isValid;
        this.setState(this.state);

        if (isValid) {
            this.props.onAddNewWord(data);

            this.state.word = '';
            this.state.description = '';
            this.setState(this.state);
        }
    }

    render() {
        return (
            <div className="main-box">
                <div className="title">New vocabulary</div>

                <div className="content-box">
                    <div className="form-group">
                        <label htmlFor="#" className="required">Word</label>
                        <div className="">
                            <input type="text" name="word" className="form-control" placeholder="Word" value={this.state.word} onChange={this.onInputChange}/>
                        </div>
                        {this.state.errors.word && <span className="error red">{ this.state.errors.word }</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="#" className="required">Description</label>
                        <div className="">
                            <textarea name="description" id="" cols="10" rows="4" className="form-control" value={this.state.description} placeholder="Description" onChange={this.onInputChange}>
                            </textarea>
                        </div>
                        {this.state.errors.description && <span className="error red">{ this.state.errors.description }</span>}
                    </div>

                    <div className="">
                        {
                            this.props.isFetching ? (
                                <button className="btn btn-primary full-width">
                                    <i className="fa fa-spin fa-spinner"> </i>
                                </button>
                            ) : (
                                <button className="btn btn-primary full-width" onClick={ this.onAdd }>
                                    <span>Add</span>
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
};

// AddNewWord.prototype = {
//     onAddNewWord: PropTypes.func.isRequired
// };

export default AddNewWord;