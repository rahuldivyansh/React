//  Video - 15 Passing props from child to parent
// We want that when we click the button in childcomponent, we execute the greetparent method in parent component

import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`);
    }
  render() {
    return (
      <div>
        {/* Basically we pass the reference to a method (this.greetParent) is ref to greetparent method as a prop (greetHandler) to the child component. Passing method as a prop */}
        <ChildComponent greetHandler = {this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent