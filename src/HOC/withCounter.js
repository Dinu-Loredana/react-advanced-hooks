import { Component } from "react";

// withCounter - HOC
// starts with 'with' and not using PascalCase, but camelCase because it's a function

const withCounter = (WrappedComponent, incrementNo) => {
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
        return { count: prevState.count + incrementNo };
      });
    };

    render() {
      console.log(this.props); // props passed by App is received by HOC -> pass down to Wrapped Component so the original comp can use it
      // render JSX with the input component and enhance it
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCounter={this.incrementCounter}
          {...this.props}
        ></WrappedComponent>
      );
    }
  }
  //return new enhanced component
  return WithCounter;
};

export default withCounter;
