import React from 'react';

const Notification = ({number}) => {
    if (number >= 20) {
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