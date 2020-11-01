import React from 'react'

function CommonError(props) {
    if(props.Sub==="Error")
    throw new Error("It is an Error")
    else
    return <h1>Component Rendered</h1>
}

export default CommonError
