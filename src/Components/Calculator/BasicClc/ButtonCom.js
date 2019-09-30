import React from "react";

class ButtonCom extends React.Component {
  render() {
    return (
      <button
        className={`column-${this.props.btnVal.cols}`}
        onClick={() => {
          const symbol = this.props.btnVal.symbol;
          return this.props.btnVal.action(symbol);
        }}
      >
        {this.props.btnVal.symbol}
      </button>
    );
  }
}

export default ButtonCom;
