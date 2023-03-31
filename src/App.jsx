import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Main from './Component/Main/Main'
import Question from './Component/Question/Question'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
     <Header></Header>
    <Main></Main>
    <Question></Question>
     
    </div>
  )
}

export default App
