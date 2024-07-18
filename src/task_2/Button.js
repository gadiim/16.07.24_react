import React, { Component } from "react";

class Button extends Component {
  handlerClick = () => {
    const { btnColor, txtColor, onClickAct } = this.props;
    onClickAct(btnColor, txtColor);
  };

  render() {
    const { btnColor, txtColor, text, className } = this.props;

    return (
      <button
        className={className}
        onClick={this.handlerClick}
        style={{ backgroundColor: btnColor, color: txtColor }}
      >
        {text}
      </button>
    );
  }
}

export default Button;
