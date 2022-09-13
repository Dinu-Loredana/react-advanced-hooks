import { Component } from "react";
import withCounter from "../HOC/withCounter";

class ClickCounter extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return <button onClick={incrementCounter}>Clicked {count} times</button>;
  }
}

// export the enhanced component
export default withCounter(ClickCounter);
