import React from "react";

export default function FunProps(props) {
  console.log("props====>", props);
  function fun(params) {
    props.name = "test"; 
  }

  return (
    <div>
      
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props?.obj?.a}</h1>
      <button onClick={() => fun()}>click me</button>
    </div>
  );
}
