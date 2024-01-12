import { createStore } from "redux";
import { ActionProps, StateProps } from "./type";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = (text: string) => {
  return { type: ADD, text };
};

export const deleteToDo = (id: string) => {
  return { type: DELETE, id };
};

const reducer = (
  state: StateProps[] = [],
  action: ActionProps
): StateProps[] => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text!, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== parseInt(action.id!));
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
