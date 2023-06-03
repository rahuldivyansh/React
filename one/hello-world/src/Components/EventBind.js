import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    //   this.buttonClick = this.buttonClick.bind(this)    // 3rd way to bind event handler
    }

    // This method works with 1,2,3 ways of binding event handlers
    // buttonClick(){
    //     this.setState({
    //         message: 'Button clicked'
    //     })
    // }

    // This is done to not need event binding. // 4th way
    buttonClick = () => {
        this.setState({
            message: 'Button Clicked'
        })
    }

  render() {
    return (
      <div>
        <div> {this.state.message}  </div>
        {/* <button onClick={this.buttonClick.bind(this)}>Click</button> ... This method of event binding with this works but it creates a new eventHandler and re-renders in each state change which could lead to performance issues in bigger applications*/ }

        {/* <button onClick={() => this.buttonClick()}>Click</button> 2nd method of event binding */}

        <button onClick={this.buttonClick}>Click</button>
      </div>
    )
  }
}

export default EventBind