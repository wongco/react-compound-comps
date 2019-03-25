import React, { Component } from 'react';
import './App.css';
import ApplePie from './Pages/ApplePie';
import Form from './Form/Form';
import GoodInput from './Form/GoodInput';

class App extends Component {
  submit = stateData => {
    console.log(stateData);
  };

  render() {
    return (
      <div className="App">
        <Form submit={this.submit}>
          {(handleSubmit, handleChange) => {
            return (
              <div>
                <Form.Input handleChange={handleChange}>Flavor</Form.Input>
                <Form.Input handleChange={handleChange}>Color</Form.Input>
                <Form.Button handleSubmit={handleSubmit}>Submit</Form.Button>
              </div>
            );
          }}
        </Form>
      </div>
    );
  }
}

export default App;
