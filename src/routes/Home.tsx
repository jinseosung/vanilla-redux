import React, { useState } from "react";
import { connect } from "react-redux";
import { StateProps } from "../type";

const Home: React.FC = (toDos) => {
  const [text, setText] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setText(target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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

export default connect(mapStateToProps)(Home);
