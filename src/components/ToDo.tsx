import React from "react";
import { StateProps } from "../type";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actionCreators } from "../store";

interface ToDoProps {
  text: string;
  onClick: () => void;
}

const ToDo: React.FC<ToDoProps> = ({ text, onClick }) => {
  return (
    <li id="id">
      {text} <button onClick={onClick}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: StateProps) => {
  return {
    onClick: () => dispatch(actionCreators.deleteToDo(ownProps.id.toString())),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
