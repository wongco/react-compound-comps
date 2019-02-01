import React, { Component } from 'react';

class Dessert extends Component {
  static Name = props => <div>{props.children}</div>;
  static Form = props => <form>{props.children}</form>;
  static Calories = props => <div>{props.children}</div>;
  static EatClick = props => (
    <button disabled {...props} style={{ backgroundColor: 'skyblue' }}>
      {props.children}
    </button>
  );

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Dessert;
