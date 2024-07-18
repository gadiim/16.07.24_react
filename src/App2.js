import React, { Component } from "react";
import Button from "./task_2/Button";
import Display from "./task_2/Display";
import './App2.css';

class App2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: { btnColor: "transparent", txtColor: "black" }
        };
    }

    stateFunc = (newBtnColor, newTxtColor) => {
        this.setState({ display: { btnColor: newBtnColor, txtColor: newTxtColor } });
    };

    resetDisplay = () => {
        this.setState({ display: { btnColor: "transparent", txtColor: "black" } });
    };

    render() {
        const { btnColor, txtColor } = this.state.display;

        return (
            <fieldset>
                <legend>TASK 2</legend>
                <Button btnColor="red" txtColor="green" text="red" className="btn" onClickAct={this.stateFunc} />
                <Button btnColor="green" txtColor="red" text="green" className="btn" onClickAct={this.stateFunc} />
                <Button btnColor="yellow" txtColor="blue" text="yellow" className="btn" onClickAct={this.stateFunc} />
                <Display btnColor={btnColor} txtColor={txtColor} />
                <Button btnColor="lightgrey" txtColor="grey" text="reset" className="btnReset" onClickAct={this.resetDisplay} />
            </fieldset>
        );
    }
}

export default App2;
