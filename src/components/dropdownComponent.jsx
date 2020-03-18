import React, { Component } from "react";

class Dropdown extends Component {
  state = {
    options: ["Option 1", "Option 2", "Option 3"]
  };

  constructor() {
    super();
    this.state = {};
  }
  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no Tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <select options={} className="Counter">
        {" "}
      </select>
    ); //JSX Expression
  }
}

export default Counter;
