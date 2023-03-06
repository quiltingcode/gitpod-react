import React from "react";

class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hello!',
            buttonText: 'Exit',
            buttonCount: 0,
        };
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State', prevState)
            console.log('Previous Props', prevProps)
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Exit" ? "Enter" : "Exit"
            }
        })
    }

    handleCount() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State', prevState)
            console.log('Previous Props', prevProps)
            return {
                buttonCount: prevState.buttonCount + 1
            }
        })
    }


    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.name},{this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.handleCount()}>Increment</button>
                <p>You've clicked {this.state.buttonCount} times</p>
            </div>
        )
        
    }
}


export default StatefulGreetingWithPrevState;