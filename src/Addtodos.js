import React from 'react'
import ReactModal from 'react-modal'
import { useState } from "react";
import { useDispatch } from "react-redux";
import {taskdata} from'./Redux/Action'
 const Addtodos=()=>{
        const [modalIsOpen, setModal] = useState(false);
        const [description, setDesc] = useState("");
        const [isDone, setIsDon] = useState("");
        const dispatch = useDispatch();
   
        const open = () => {
        setModal(true);
      };
        const close = () => {
        setModal(false);
      };
        const add = () => {
        const newdoto = {
          id: Math.random(),
          description,
          
        };
        dispatch(taskdata(newdoto));
        close();
      };
      console.log(add,'kjj')
      console.log (taskdata,'edf')
  return (
    <div>
      <button className='button' onClick={open} >
          Add Task
        </button>
        <ReactModal isOpen={modalIsOpen} >
          <form>
            <label>Description</label>
            <input type="text" onChange={(e) => setDesc(e.target.value)} />
            <label>Is Done</label>
            <input type="text" onChange={(e) => setIsDon(e.target.value)} />
            </form>
          <button className='button' onClick={close}>
            close{" "}
          </button>
          <button className='button' onClick={add}>
            submit{" "}
          </button>
        </ReactModal>
    </div>
  )
}

export default Addtodos;

