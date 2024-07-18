import React, { useState } from "react";
import Button from "./task_1/Button";
import Display from "./task_1/Display";

function App1() {
  const initialState = { btnColor: "transparent", txtColor: "black" };
  const [display, setDisplay] = useState(initialState);

  const stateFunc = (newBtnColor, newTxtColor) => {
    setDisplay({ btnColor: newBtnColor, txtColor: newTxtColor });
  };

  const resetDisplay = () => {
    setDisplay(initialState);
  };

  return (
    <fieldset style={{ borderRadius: "5px", margin: "15px" }}>
      <legend>TASK 1</legend>
      <Button btnColor="red" txtColor="green" text="red" onClickAct={stateFunc} />
      <Button btnColor="green" txtColor="red" text="green" onClickAct={stateFunc} />
      <Button btnColor="yellow" txtColor="blue" text="yellow" onClickAct={stateFunc} />
      <Display btnColor={display.btnColor} txtColor={display.txtColor} />
      <Button
        btnColor="lightgrey"
        txtColor="grey"
        text="reset"
        onClickAct={resetDisplay}
        style={{ width: "310px", height: "50px" }}
      />
    </fieldset>
  );
}

export default App1;