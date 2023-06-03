// Video 17 -- Rendering lists in react using array.map() method(Showing lists in ui using react)
import React from "react";

function NameList() {
  const names = ["Bruce", "Clark", "Diana", "Bruce"];
//   const persons = 
  return(
    <div> {names.map((name,index) => <h2 key={index}> {name} </h2>)} </div>
  )
}

export default NameList
