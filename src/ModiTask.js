import React from 'react'
import ReactModal from 'react-modal'
import { useState } from "react";
import { useDispatch } from "react-redux";
import {editdata,deletedata} from'./Redux/Action'
 const ModiTask=({el})=>{
        const [modalIsOpen, setModal] = useState(false);
        const [description, setDesc] = useState(el.description);
        const [isDone, setIsDon] = useState(el.isDone);
      
        const dispatch = useDispatch();
   console.log (el,"df")
        const open = () => {
        setModal(true);
      };
        const close = () => {
        setModal(false);
      };
        const add = () => {
        const newdoto = {
          description,
         
        };
        dispatch(editdata({...el,description:description}));
        close();
      };
      const delt = () => {
        const deldoto = {
          id:el.id
         
        };
        dispatch(deletedata(deldoto));
        close();
      };
      console.log(add,'kjj')
      console.log (editdata,'edf')
  return (
    <div>
      <button className='button-17' onClick={open} >
          Edit
        </button>
        <ReactModal isOpen={modalIsOpen} >
          <form>
            <label>Description</label>
            <input type="text" 
            value={description}
            onChange={(e) => setDesc(e.target.value)} />
            <label>Is Done</label>
            <input type="text" 
            value={isDone}
            onChange={(e) => setIsDon(e.target.value)} />
            </form>
          <button className='button-17' onClick={close}>
            close{" "}
          </button>
          <button className='button-17' onClick={add}>
            submit{" "}
          </button>
        </ReactModal> 
        <button className='button-17' onClick={delt}>
          Delet
        </button> 
    </div>
  )
}

export default ModiTask;

