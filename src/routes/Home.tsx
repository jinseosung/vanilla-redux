import React, { useState } from "react";
import { connect } from "react-redux";
import { StateProps } from "../type";
import { actionCreators } from "../store";
import { Dispatch } from "redux";

interface HomeProps {
  toDos: StateProps[];
  addToDo: (text: string) => void;
}

const Home: React.FC<HomeProps> = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setText(target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text) return;
    addToDo(text);
    setText("");
  };

  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </div>
  );
};

const mapStateToProps = (state: StateProps[]) => {
  return { toDos: state };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return { addToDo: (text: string) => dispatch(actionCreators.addToDo(text)) };
};

// export default connect(null, mapDispatchToProps)(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Home);
