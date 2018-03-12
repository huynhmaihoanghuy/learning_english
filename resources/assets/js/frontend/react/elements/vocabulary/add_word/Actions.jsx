import React, {Component} from 'react';
import RemoveWordAction from "./DeleteWord";
import LearnANewWord from "./LearnANewWord";

class Actions extends Component {
    render () {
        return (
            <div>
                <RemoveWordAction data={this.props.data} removeWord={this.props.removeWord}/>
                &nbsp; &nbsp;

                {
                    this.props.addedTotal >= 5 ? (
                        <LearnANewWord data={this.props.data}/>
                    ) : (
                        <div> </div>
                    )
                }

            </div>
        )
    }
}

export default Actions;