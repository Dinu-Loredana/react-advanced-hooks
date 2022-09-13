import { Component } from "react";

// withCounter - HOC
// starts with 'with' and not using PascalCase, but camelCase because it's a function

const withCounter = (WrappedComponent) => {
  // takes in original compononent (WrappedComponent)

  class WithCounter extends Component {
    // returns the new enhanced component (WithCounter)
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

    render() {
      // render JSX within new enhanced component
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
        ></WrappedComponent>
      );
    }
  }
  //return new enhanced component
  return WithCounter;
};

export default withCounter;
