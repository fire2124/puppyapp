import {NumberInput} from './NumberInput';
import React, { Component } from "react";

class NIClass extends Component {
    constructor() {
      super();
      this.state = {
        name: 'React',
        value: 5,
      };
    }
  
  
    inputChange = (e) => {
      const newState = Object.assign({}, this.state)
      newState.value = e.target.value
      
      this.setState(newState)
     
    }
    
    render() {
      return (
        <div>
          <NumberInput value={this.state.value} onChange={this.inputChange}/>
        </div>
      );
    }
  }

  export default NIClass;
