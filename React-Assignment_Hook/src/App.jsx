import ClassCom from "./Components/ClassCom";
import FunCom from "./Components/FunCom"
import "./App.css";
import ReactStrapCom from "./style-bootstrap/ReactStrapCom";
import ReactStrap2 from "./style-bootstrap/ReactStrap2";
import Accordian from "./style-bootstrap/Accordian";
import HeaderCom from "./Task/components/HeaderCom";
import FooterCom from "./Task/components/FooterCom";
import Body from "./Task/components/Body";
import ClassState from "./State/ClassState";
import FunState from "./State/FunState";
import UseStatedec from "./State/UseStatedec";
import UseStatedecinc from "./State/UseStatedec";
import ClassProps from "./Props/ClassProps";
import UseRefCom from "./Hook/UseState/UseRef/UseRefCom";
import UseEffectCom from "./Hook/UseState/UseEffect/UseEffectCom";

function App(){
  return(
    <div>
     {/* <UseStatedec/> */}
         {/* <UseRefCom/> */}
     
     <UseEffectCom/>
    
   
      
    </div>
  )
}
export default App;