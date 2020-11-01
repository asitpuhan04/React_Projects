import React from 'react';
import DisplayCounter from './displayCounter';



//Passing Arguments also should be defined.Optional Parameter/Default Parameter

class Counter extends React.Component {
    constructor(props) {
        super(props);
        //Way 2
        // this.onIncrementClick = this.onIncrementClick.bind(this);
        this.description=React.createRef();

        this.state = {
            //counterVal: 0,
            // numbers:[1,2,3,4,5,6,7],
            // products:[{
            //     id:1,name="oven",description:"Baking oven"},
            //     {id:1,name="Mixer",description:"Mixes all food items"},
            //     {id:1,name="Gas stove",description:"Cooks all the raw food"}],
            // //showNoCounter: true,
            // name:'Test'
        }
    }
    //Way 2 Method Definition
    //onIncrementClick(){
    //console.log(e);
    //alert("I'm Increment Clicked ++");
    //}

    //Way 1 Method Definition

    onIncrementClick = () => {
        this.setState({ counterVal: this.state.counterVal + 1 });
        console.log(this.state.counterVal);
        // alert("I'm Increment Clicked ++"+value);
    }
    onDecrementClick = () => {
        this.setState({ counterVal: this.state.counterVal - 1 });
        console.log(this.state.counterVal);
    }

    onNameChange = (event) => {
        console.log(event);
        this.setState({
            name: event.target.value
        });
    }

    onSubmitClick = () => {
        console.log(this.description.current.value);
    }
    render() {
        const { numbers, products } = this.state;
        const{counterVal,onProdInc,onProdDec}=this.props;
        return (
            <React.Fragment>
                <div class="container">
                    <div className="row">
                        <div className="col-md-1">
                            <input type="button" class=".btn" value="-"
                                onClick={() => onProdDec()} />
                        </div>
                        <div className="col-md-4">
                            <DisplayCounter counterVal={counterVal} />
                        </div>
                        <div className="col-md-1">
                            <input type="button" value="+"
                                onClick={() => onProdInc()} />
                        </div>
                    </div>



                </div>

            </React.Fragment>)
    }

}

export default Counter;