import { TASKDATA,EditDATA, DeleteDATA,IsDone} from "./Action_type";


export const taskdata = (data) => {
  return {
    type: TASKDATA,
    payload: data
  };
};

export const editdata = (data) => {
  return {
    type: EditDATA,
    payload: data
  };
};
export const deletedata = (data) => {
  return {
    type: DeleteDATA,
    payload: data
  };
};
export const isdone = (data) => {
  return {
    type: IsDone,
    payload: data
  };
};

