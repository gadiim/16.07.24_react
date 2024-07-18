import React from "react";

function Display(props) {
  return (
    <div
      style={{
        backgroundColor: props.btnColor,
        color: props.txtColor,
        textAlign: "center",
        width: "310px",
        height: "100px",
        border: "1px solid gray",
        borderRadius: "4px",
        display: "table-cell",
        verticalAlign: "middle"
      }}
    >
      basic functional component
    </div>
  );
}

export default Display;
