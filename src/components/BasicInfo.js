import React, { Component } from "react";

export default class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: props.people,
    };
  }

  render() {
    return (
      <div className="container">
        <h1>{this.state.people.name}</h1>
        <p>{this.state.people.number}</p>
        <p>{this.state.people.dob}</p>
      </div>
    );
  }
}
