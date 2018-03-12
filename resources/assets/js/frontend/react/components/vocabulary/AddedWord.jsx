import React, {Component} from 'react';
import moment from 'moment';
import RemoveWordAction from '../../elements/vocabulary/add_word/DeleteWord';
import LearnNewWordButton from '../../elements/vocabulary/add_word/LearnNewWordButton';
import LearnANewWord from '../../elements/vocabulary/add_word/LearnANewWord';
import Actions from "../../elements/vocabulary/add_word/Actions";

class AddedWord extends Component {
    render() {
        let {addedWordArray} = this.props;
        return (
            <div className="main-box">

                <div className="title">
                    <span>Added words </span>
                    <span className="full-right">{ moment().format('MM/DD/Y') }</span>
                </div>

                <div className="">
                    <table className="table table-hover table-bordered">
                        <thead>
                        <tr>
                            <th className="text-center" width="10%">#</th>
                            <th className="text-center" width="25%">Word</th>
                            <th className="text-center" width="40%">Description</th>
                            <th className="text-center" width="15%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            addedWordArray.length > 0 ? (
                                addedWordArray.map((value, index) => {
                                    return (
                                        <tr key={index} className={value.is_practiced ? 'tr-active' : ''}>
                                            <td className="text-center">{ index+1 }</td>
                                            <td>{ value.word }</td>
                                            <td>{ value.description }</td>
                                            <td>
                                                <Actions data={value} addedTotal={addedWordArray.length} removeWord={this.props.removeWord}/>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <td className="text-center" colSpan="4">
                                        No data
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

                <LearnNewWordButton total={addedWordArray.length}/>

            </div>
        )
    }

    componentDidMount() {
        let date = moment().format('MM/DD/Y');
        this.props.getAddedWordsByDate(date);
    }
}

export default AddedWord;