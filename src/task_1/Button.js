import React from "react";

function Button(props) {
  function handlerClick() {
    props.onClickAct(props.btnColor, props.txtColor);
  }

  return (
    <button
      onClick={handlerClick}
      style={{
        backgroundColor: props.btnColor,
        color: props.txtColor,
        textAlign: "center",
        margin: "5px 5px 5px 0",
        width: props.style?.width || "100px",
        height: props.style?.height || "50px",
        borderColor: "lightgray",
        borderRadius: "4px"
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;
