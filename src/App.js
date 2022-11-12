import  './App.css'
import React, { useState } from 'react'
const App=()=>{
  const [counter,setCounter]=useState(0)

  const valueUpdate=(value)=>{
    setCounter(counter+value)
  }
  return(
    <>
    <h1>Counter</h1>
  

    <div className='container'>
    <h2 >{counter}</h2>
    <button onClick={()=>valueUpdate(1)}>Add</button>
    <button onClick={()=>valueUpdate(-1)}> Reduce</button>
  
    </div>
 </>
  )
}
export default App