import React, { Component } from "react";

class Display extends Component {
    render() {
        const { btnColor, txtColor } = this.props;

        return (
            <div className="display" style={{ backgroundColor: btnColor, color: txtColor }}>
                basic class component
            </div>
        );
    }
}

export default Display;
