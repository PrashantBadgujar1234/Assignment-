import React from 'react'
import "./index.css";

export default function ReactStrapCom() {
  const st={
    height:"200px",
    width:"200px",
    "background-color":"red",
  }

  return (
    <div>
    <h1 className="fw-bold" style={{color:"red",height:"500px"}}>test</h1>
    <h1 style={st}>test</h1>
     <h1 className='text-danger'>ReactStrapCom</h1>
     </div>
   
  );
}
