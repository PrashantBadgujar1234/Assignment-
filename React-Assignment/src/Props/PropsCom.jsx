import React, { useState } from "react";    
import PropsDestructuring from "./PropsDestructuring";
import FunProps from "./FunProps";
import ClassProps from "./ClassProps";

export default function ProposCom() {
  const [name, setName] = useState("URVISH");
  return (
    <div>
    <FunProps name={name} age={20}/>
    <ClassProps name={"urvish"}/>
      {/* <FunProps name={"Nayan"} obj={{ a: 200, b: 30 }} />  */}
     
      {/* <PropsDestructuring name={"test"} age={20} /> */}
    </div>
  );
}