import React from 'react';

class PureComp extends React.PureComponent{
    render(){
        console.log("Pure Component Rendered");
        return <h1>Pure Component</h1>
    }
}

export default PureComp;