import React, {Component} from "react";

class RemoveWordAction extends Component {
    constructor() {
        super();

        this.removeWordAction = this.removeWordAction.bind(this);
    }

    removeWordAction() {
        swal({
            title: "Are you sure?",
            text: "Your will not be able to recover this imaginary file!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes, delete it!",
            closeOnConfirm: false,
            showLoaderOnConfirm: true
        }, () => {
            this.props.removeWord(this.props.data.id);
        });
    }

    render() {
        return (
            <div className="text-center display-inline-block">
                <a href="#" onClick={this.removeWordAction}><i className="fa fa-remove"> </i></a>
            </div>
        )
    }
}

export default RemoveWordAction;