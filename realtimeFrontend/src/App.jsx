import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/Login'
import Register from './components/Register'
import SetAvatar from './components/SetAvatar'
import {HashRouter,Route,Routes,Link} from "react-router-dom"
import Chat from './components/Chat'


function App() {
  const [count, setCount] = useState(0)
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleButtonClicked = ()=>{
    setButtonClicked(true)
  }
  return (
    <HashRouter>
    {/* <Link to="/">{!buttonClicked && (<button onClick={handleButtonClicked}>click me</button>)}</Link> */}
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/setAvatar" element={<SetAvatar/>} />
      <Route path="/chat" element={<Chat/>} />
    </Routes>
    </HashRouter>
  )
}

export default App
