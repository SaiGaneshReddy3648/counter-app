import React from 'react'
import {useState} from 'react'
const App=()=>{
  let [score,setScore]=useState(0)


  return (
    <div>
      <h1>Counter App</h1>
      <h3>the value of a score is: {score}</h3>
      <button onClick={()=>(score<25)? setScore(score+1):""}>increment</button>
        {/* conditio ? true : flase */ }
      <button onClick={()=>(score>0)? setScore(score-1):""}>decrement</button>
      <button onClick={()=>{setScore(score=0)}}>reset</button>
    </div>
  )
}
export default App
