import { createStore } from "redux";
import { StateProps } from "./type";
import { createAction, createReducer } from "@reduxjs/toolkit";

const addToDo = createAction<string>("ADD");
const deleteToDo = createAction<string>("DELETE");

const reducer = createReducer([] as StateProps[], (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      // mutate the state (using Immer)
      // if want to return it, it should be new state
      state.push({ text: action.payload, id: Date.now() });
    })
    .addCase(deleteToDo, (state, action) => {
      // return new state
      return state.filter((toDo) => toDo.id !== parseInt(action.payload));
    });
});

const store = createStore(reducer);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;

// const reducer = (
//   state: StateProps[] = [],
//   action: CreateActionProps
// ): StateProps[] => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== parseInt(action.payload));
//     default:
//       return state;
//   }
// };

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text: string) => {
//   return { type: ADD, text };
// };

// const deleteToDo = (id: string) => {
//   return { type: DELETE, id };
// };

// const reducer = (
//   state: StateProps[] = [],
//   action: ActionProps
// ): StateProps[] => {
//   switch (action.type) {
//     case ADD:
//       return [{ text: action.text!, id: Date.now() }, ...state];
//     case DELETE:
//       return state.filter((toDo) => toDo.id !== parseInt(action.id!));
//     default:
//       return state;
//   }
// };
