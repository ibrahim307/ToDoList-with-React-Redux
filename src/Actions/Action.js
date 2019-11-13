import {
  ADD_LIST,
  DELETE_LIST,
  TOGGLE,
  Edit_Todo,
  Edit_TEXT
} from "../Actions/ActionTypes";
export const addList = newTodo => {
  return {
    type: ADD_LIST,
    payload: newTodo
  };
};
export const deleteListe = index => {
  return {
    type: DELETE_LIST,
    payloadId: index
  };
};
export const toggle = index => {
  return {
    type: TOGGLE,
    payloadIndex: index
  };
};
export const editTodo = (id, editodo) => {
  return {
    type: Edit_Todo,
    payloadId: id,
    payload: editodo
  };
};
export const editText = id => {
  return {
    type: Edit_TEXT,
    payload: id
  };
};
