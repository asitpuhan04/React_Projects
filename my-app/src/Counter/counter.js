import React from 'react';
import DisplayCounter from './displayCounter';


//Passing Arguments also should be defined.Optional Parameter/Default Parameter

class Counter extends React.Component{
    constructor(props){
        super(props);
        //Way 2
        // this.onIncrementClick = this.onIncrementClick.bind(this);

        this.state={
            counterVal:0,
            showNoCounter :true
        }
    }
    //Way 2 Method Definition
    //onIncrementClick(){
        //console.log(e);
        //alert("I'm Increment Clicked ++");
        //}

        //Way 1 Method Definition

        onIncrementClick = (value=0) => {
            value =value+1;
            this.setState({counterVal:value});
            console.log(value);
           // alert("I'm Increment Clicked ++"+value);
        }
        onDecrementClick = (value =0) =>{
            value =value-1;
            this.setState({counterVal:value});
            console.log(value);
        }

        render(){
            return(
            <React.Fragment>
               <DisplayCounter counterVal={this.state.counterVal} />
                <input type="button" value="+" 
                onClick={(value)=>this.onIncrementClick(this.state.counterVal)}/>
                <input type="button" value="-" 
                onClick={(value)=>this.onDecrementClick(this.state.counterVal)} />
            </React.Fragment>)
        }
    
}

export default Counter;