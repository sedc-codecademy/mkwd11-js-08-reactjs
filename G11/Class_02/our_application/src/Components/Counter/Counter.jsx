import React from "react";

// Extends is class component specific
class Counter extends React.Component {
    constructor(props) {
        super(props);


        this.myNumber = 0; // IS NOT PART OF THE STATE!!!

        // console.log('Constructor') // #1 
        // console.log('props in counter class component:', props)

        // Telling REACT which properties are part of the STATE
        this.state = {
            number: 0,
            message: ""
        }


        this.handleChangeMessage = this.handleChangeMessage.bind(this)
    }

    handleIncrement = () => {
        // INCREMENTING property that is not in state 
        this.myNumber += 1;
        console.log('Increment was clicked')
        // console.log(this.myNumber)

        // INCREMENTING prop. FROM THE STATE
        this.setState({
            /**
             * this.state.number => accessing the actual value of number
             * property of the state
             */
            number: this.state.number + 1
        })

    }

    handleDecrement = () => {
        // DECREMENTING property that is not in state 
        this.myNumber -= 1;
        console.log('Decrement was clicked')
        // console.log(this.myNumber)


        // DECREMENTING prop. FROM THE STATE
        this.setState({
            number: this.state.number - 1
        })
    }


    handleChangeMessage(event){
        const value = event.target.value;

        this.setState({
            message: value
        })
    };

    // render method is Class Component Specific
    render() {
        // console.log(this.myNumber)
        // console.log('Render') // #2
        return (
            <div style={{
                marginTop: '30px',
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h3>{this.props.title}</h3>
                {/* <h4>Counter value is: {this.myNumber}</h4> */}
                <h4>Counter value is: {this.state.number}</h4>

                <div>
                    {/* JSX handling events */}
                    <button onClick={this.handleIncrement}>Increment</button>

                    {/* JSX handling events syntax 2, good for when providing arguments */}
                    <button onClick={() => this.handleDecrement()}>Decrement</button>

                </div>

                <br />
                <hr />

                {/* WORKING WITH THIS SYNTAX */}
                {/* <input type="text" onChange={(event) => {
                    console.log(event.target.value)
                    this.handleChangeMessage(event)
                }} /> */}

                {/* WORKING 2 */}
                {/* <input type="text" onChange={this.handleChangeMessage.bind(this)}/> */}


                <input type="text" onChange={this.handleChangeMessage}/>
                <h3>Message live: {this.state.message}</h3>


            </div>
        )
    }
};


export default Counter;