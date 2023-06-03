import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button from function clicked')
    }
  return (
    <div>
        <button onClick = {clickHandler}>Click (Function)</button>
    </div>
  )
}

export default FunctionClick