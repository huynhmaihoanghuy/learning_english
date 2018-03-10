import React from 'react';

const Item = ({index, text}) => {
    return (
        <div className="item-vocabulary">
            <div className="number">{index + 1}</div>
            <div className="word">{text}</div>
        </div>
    )
};

const Result = ({data}) => {
    return (
        <div className="form-group">
            <label>Result: </label>
            <div className="result-vocabulary">
                {
                    data.length > 0 ? (
                        data.map((text, index) => {
                            return <Item key={index} index={index} text={text} />
                        })
                    ) : (
                        <div className="alert alert-warning" role="alert">Cannot found data</div>
                    )

                }
            </div>
        </div>
    )
};

export default Result;