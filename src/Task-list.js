import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'


function Tasklist() {
 
    const todos=useSelector((state)=>(state.todos))
    console.log(todos,"helllo")
    
  return (
    <div >
     <ol>
      {
        todos.map((el)=>(
        <Todo el={el}/>
        
    ))
      
      }
      
      </ol>
      
      
    </div>
  )
}
export default Tasklist



