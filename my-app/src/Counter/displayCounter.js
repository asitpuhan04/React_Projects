import React from 'react';

function DisplayCounter(props) {
    return <React.Fragment>
        {props.counterVal !== 0 ?
            <p>Counter Value is {props.counterVal}</p>
            : <p>Please click on button to show the values</p>}   
    </React.Fragment>

}

export default DisplayCounter;