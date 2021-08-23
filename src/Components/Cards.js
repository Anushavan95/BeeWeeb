import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Cards(props) {
  const { dragStart, dragleave, dragEnd, dragOver, drop, deleteCard, item } =
    props;
  return (
    <div
      className="list-item"
      onDragStart={(e) => dragStart(e, item)}
      onDragLeave={(e) => dragleave(e)}
      onDragEnd={(e) => dragEnd(e)}
      onDragOver={(e) => dragOver(e)}
      onDrop={(e) => drop(e)}
      draggable={true}
    >
      <IconButton aria-label="delete">
        <DeleteIcon onClick={() => deleteCard(props.id)} />
      </IconButton>
      <h2> {props.name}</h2>
      <img src={props.img} />
    </div>
  );
}
