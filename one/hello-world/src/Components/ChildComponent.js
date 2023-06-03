// Video 15
import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick = {() => props.greetHandler('child beta')}>Greet Parent</button> 
    </div>
  )
}

export default ChildComponent