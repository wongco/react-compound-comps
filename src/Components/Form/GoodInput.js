import React, { Component } from 'react';

class GoodInput extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="{this.props.name}">{this.props.name}</label>
        <input
          type="text"
          name={this.props.name}
          onChange={this.props.handleChange}
        />
      </form>
    );
  }
}

export default GoodInput;
