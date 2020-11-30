import React from 'react';
//import Counter from '../Counter/counter';

const withCounter = (CounterComponent) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            };
        }
        onCounterInc = () => {
            let count = parseInt(sessionStorage.getItem("TotalCartValue"));
            sessionStorage.setItem("TotalCartValue", count + 1);
            this.setState(prevState => {
                return { count: prevState.count + 1 };
            });
        }
        onCounterDec = () => {
            let count = parseInt(sessionStorage.getItem("TotalCartValue"));
            sessionStorage.setItem("TotalCartValue", count - 1);
            this.setState(prevState => {
                return { count: prevState.count - 1 };
            });
        }
        render() {
            return <CounterComponent count={this.state.count}
                onInc={this.onCounterInc} onDec={this.onCounterDec} />
        }
    }
    return WithCounter;
}
export default withCounter;
