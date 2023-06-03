import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Visitor",
      buttonMsg: "Subscribe",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thank You for subscribing",
      buttonMsg: "Subscribed",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>
          {this.state.buttonMsg}
        </button>
      </div>
    );
  }
}

export default Message;
