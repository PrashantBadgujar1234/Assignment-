import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderCom from './Components/HeaderCom'
import BodyCom from "./Components/BodyCom"
import FooterCom from './Components/FooterCom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <HeaderCom/>
     <BodyCom/>
     <FooterCom/>
    </>
  )
}

export default App
