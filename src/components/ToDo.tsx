import React from "react";
import { StateProps } from "../type";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

interface ToDoProps {
  text: string;
  id: number;
  onClick: () => void;
}

const ToDo: React.FC<ToDoProps> = ({ text, id, onClick }) => {
  return (
    <li id={`${id}`}>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onClick}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch: Dispatch, ownProps: StateProps) => {
  return {
    onClick: () => dispatch(actionCreators.deleteToDo(ownProps.id.toString())),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
