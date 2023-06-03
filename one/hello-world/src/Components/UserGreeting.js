// Video 16
import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // Using if-else. 1st method
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Divyansh</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }

    // Using Element Variables. 2nd method
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Divyansh</div>
    // } else{
    //     message = <div>Welcome Guest</div>
    // }

    // return (
    //     <div>{message}</div>
    // )

    // Ternary Operator. 3rd method
    // return  this.state.isLoggedIn ? (
    //   <div>Welcome Divyansh</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // Short Circuit Operator way. 4th method. Returns nothing is false
    return this.state.isLoggedIn && <div>Welcome Divyansh</div>;
  }
}

export default UserGreeting;
