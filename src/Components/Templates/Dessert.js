import React, { Component } from 'react';
import styled from 'styled-components';

// gives each rendered child enforced padding
const ChildContainer = styled.div`
  /* gross, avoid this */
  background-color: ${props => props.bgcolor};
  border-radius: 5px;
  box-shadow: 5px 5px 18px gray;
  width: 20%;
  padding: 20px;
  margin: 10px;
`;

class Dessert extends Component {
  static Name = props => props.children();
  static Form = props => <form>{props.children}</form>;
  static Description = props => <div>{props.children}</div>;
  static Calories = props => <div>{`Calories: ${props.children}`}</div>;

  /**
   * EatClick has a default prop of disabled attached to it. can be over written by {...props}
   */
  static EatClick = props => (
    <button disabled {...props} style={{ backgroundColor: 'skyblue' }}>
      {props.children}
    </button>
  );

  render() {
    return React.Children.map(this.props.children, child => {
      return <ChildContainer bgcolor={'orange'}>{child}</ChildContainer>;
    });
    // return <div>{this.props.children}</div>;
  }
}

export default Dessert;
