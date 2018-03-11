import React from 'react';

const Notification = ({id, number, onFinished, isPracticed}) => {
    if (isPracticed) {
        return (
            <div className="finished-box">
                <i className="fa fa-check"> </i>
                Finished
            </div>
        )
    }

    if (number >= 20) {
        onFinished(id);

        return (
            <div className="finished-box">
                <i className="fa fa-check"> </i>
                Finished
            </div>
        )
    } else {
        return (
            <div className="unfinished-box">
                <i className="fa fa-close"> </i>
                Unfinished
            </div>
        )
    }
};

export default Notification;