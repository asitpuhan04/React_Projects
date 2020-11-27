import React from 'react';
import DisplayCounter from './displayCounter';
import withCounter from '../HOC/withCounter';

//Passing Arguments also should be defined.Optional Parameter/Default Parameter
class Counter extends React.Component {
    constructor(props) {
        super(props);
        //Way 2
        // this.onIncrementClick = this.onIncrementClick.bind(this);
        this.description = React.createRef();

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
        const { count, onInc, onDec } = this.props;
        return (
            <React.Fragment>
                <div class="container">
                    <div className="row">
                        <div className="col-md-1">
                            <input type="button" class=".btn" value="-"
                                onClick={() => onDec()} />
                        </div>
                        <div className="col-md-4">
                            <DisplayCounter counterVal={count} />
                        </div>
                        <div className="col-md-1">
                            <input type="button" value="+"
                                onClick={() => onInc()} />
                        </div>
                    </div>
                </div>

            </React.Fragment>)
    }

}

export default withCounter(Counter);