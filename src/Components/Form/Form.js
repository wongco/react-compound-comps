import React, { Component } from 'react';
import GoodInput from './GoodInput';

class Form extends Component {
  state = {};

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.submit(this.state);
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  static Input = props => (
    <GoodInput
      handleChange={props.handleChange}
      name={props.children}
      {...props}
    />
  );

  static Button = props => (
    <button onClick={props.handleSubmit} {...props}>
      {props.children}
    </button>
  );

  render() {
    // return (
    //   <div>{this.props.children(this.handleSubmit, this.handleChange)}</div>
    // );
    return (
      <div>{this.props.children(this.handleSubmit, this.handleChange)}</div>
    );
  }
}

export default Form;
