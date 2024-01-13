import { createStore } from "redux";
import { ActionProps, StateProps, Todo } from "./type";

const form = document.querySelector("form") as HTMLFormElement;
const input = document.querySelector("input") as HTMLInputElement;
const ul = document.querySelector("ul") as HTMLUListElement;

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text: string) => {
  return { type: ADD_TODO, text };
};

const deleteTodo = (id: string) => {
  return { type: DELETE_TODO, id };
};

const reducer = (
  state: StateProps[] = [],
  action: ActionProps
): StateProps[] => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text!, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== parseInt(action.id!));
    default:
      return state;
  }
};

const store = createStore(reducer);

const dispatchAddToDo = (text: string) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e: Event) => {
  const target = e.target as HTMLButtonElement;
  if (target) {
    const parentNode = target.parentNode as HTMLLIElement;
    const id = parentNode.id;
    store.dispatch(deleteTodo(id));
  }
};

const paintToDos = () => {
  const toDos: Todo[] = store.getState();
  ul.innerHTML = "";
  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = `${toDo.id}`;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDos);

const onSubmit = (e: Event) => {
  e.preventDefault();
  const toDo = input.value;
  if (!toDo) return;

  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);

export {};

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
