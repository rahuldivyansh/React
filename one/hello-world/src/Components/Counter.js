import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  updateCount() {
    if (this.state.count == 20) {
      this.setState({
        message: "Are bass kar bhyi",
      });
    }
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("Callback value", this.state.count);
    //   }
    // );

    this.setState(
      (prevState) => ({
        count: prevState.count + 1
      })
    )
  }

  updateFive(){
    this.updateCount()
    this.updateCount()
    this.updateCount()
    this.updateCount()
    this.updateCount()
  }

  render() {
    return (
      <div>
        Count: {this.state.count} <br />
        <button onClick={() => this.updateFive()}>Click me</button> <br />
        {this.state.message}
      </div>
    );
  }
}

export default Counter;
