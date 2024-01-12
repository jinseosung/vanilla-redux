import React from "react";
import { connect } from "react-redux";
import { StateProps } from "../type";
import { useParams } from "react-router-dom";

interface DetailProps {
  toDos: StateProps[];
}

const Detail: React.FC<DetailProps> = ({ toDos }) => {
  const { id } = useParams();
  const toDo = toDos.find((toDo) => toDo.id.toString() === id);
  const formattedDate = new Date(toDo?.id!).toLocaleString();
  return (
    <div>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {formattedDate}</h5>
    </div>
  );
};

const mapStateToProps = (state: StateProps[]) => {
  return { toDos: state };
};

export default connect(mapStateToProps)(Detail);
