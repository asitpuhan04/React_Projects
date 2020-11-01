import React, { Component } from 'react'

class ErrorBoundary extends Component {

    constructor(props){
        super(props)
        this.state ={
            hasError:false
        }
    }

    static getDerivedStateFromError(){
        return {
            hasError:true
        }
    }
    render() {
        if(this.state.hasError)
        return <h1>Something has seriously gone wrong in your</h1>
        return (
        this.props.children   
        )
    }
}

export default ErrorBoundary
