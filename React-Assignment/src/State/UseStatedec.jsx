import {React,useState} from 'react'
import { Button } from 'reactstrap' 

 function UseStatedec() {
    const[count, setCount]=useState(10)
    const[plusecount,setplusecount]=useState(0)

    function UpdateCount(){
        setCount(count - 1)
        
       // console.log(count);
    }
    function DeleteCount()
    {
      setplusecount(plusecount + 1)
    }
    return (
      <div>
        <p>Count: {count}</p>
        <Button onClick={UpdateCount} color="danger" outline>
          Decrease Count
        </Button>
        
        <p>Text: {plusecount}</p>
        <Button onClick={DeleteCount} color="success" outline>
        Increse Count
        </Button>
      </div>
    );
  }
  
  export default UseStatedec;
  

