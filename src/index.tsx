import { createStore } from "redux";

const add = document.getElementById("add") as HTMLButtonElement;
const minus = document.getElementById("minus") as HTMLButtonElement;
const number = document.querySelector("span") as HTMLSpanElement;

number.innerText = `${0}`;

const ADD = "ADD";
const MINUS = "MINUS";

// const reducer = (state, action) => { return state };
const countModifier = (count = 0, action: { type: string }) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

// const store = createStore(reducer);
// store.dispatch({ key : value}); === store.dispatch(action);
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = `${countStore.getState()}`;
};

// Listen for changes in the store
countStore.subscribe(onChange);

add.addEventListener("click", () => {
  countStore.dispatch({ type: ADD });
});
minus.addEventListener("click", () => {
  countStore.dispatch({ type: MINUS });
});

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
