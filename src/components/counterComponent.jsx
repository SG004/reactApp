import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };
  styles = {
    fontSize: 136,
    fontWeight: "bold"
  };

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log("Increment Clicked", this);
    this.setState({ value: this.state.value + 1 });
  }
  render() {
    console.log("props", this.props);

    let classes = this.getBadgeClasses();
    return (
      <div className="Counter">
        <span className={classes}>{this.state.value}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    ); //JSX Expression
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
