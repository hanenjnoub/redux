import {TASKDATA , EditDATA,DeleteDATA ,IsDone } from "./Action_type"
import {TkData} from "../Data"



const initdata={
  todos:TkData
};


export const taskReducer=(state=initdata,action)=>{
  switch (action.type){
    case TASKDATA  :
      return {
      ...state,
      todos:[...state.todos, action.payload]  
  };
  case EditDATA:
    return{
    ...state,
    todos:state.todos.map((el)=>(el.id===action.payload.id?action.payload:el)) 
  }
  case DeleteDATA:
    return{...state,
      todos:state.todos.filter((el)=>(action.payload.id!== el.id)) 
         }
   case IsDone:
      return{...state,
        todos:state.todos.map((el)=>(el.id===action.payload ? {...el,isDone:!el.isDone}: el)) 
          }
  default:
    return state
}
};
