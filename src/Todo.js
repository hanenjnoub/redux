import React from 'react'
import ModiTask from './ModiTask'
import { useState } from 'react';
import {isdone} from'./Redux/Action'
import { useDispatch } from "react-redux";
function Todo({el}) {
  const dispatch = useDispatch();
  const verif=()=>{

  dispatch(isdone(el.id));
 
  console.log(el,"rer")
  }
  return (
    <div >{
   el.isDone ? <li style={{color:"red"}}>{el.description} </li> :
        <li>{el.description} </li> 
    }
       < p className="btdon"><button className='button-17' onClick={verif}>isDone</button></p> 
        <ModiTask el={el}/>
 
    </div>
  )
}

export default Todo
