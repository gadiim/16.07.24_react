import React from 'react';

function Display(props) {
    return (
        <div className='display'>
            <div>{props.sentence}</div>
            <div>{props.name}</div>
        </div>
    );
}

export default Display;
