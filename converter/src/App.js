import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor()
  {

    super();
    this.state = 
    {
      result: null,
      multiplicator: 24.53,
      current_amount: 0,
      currency: ''
    }; 
  }

  updateAmount(event)
  {
    this.setState({current_amount: event.target.value.substr(0,10)})
  }

  convertHandler = () => {
        const result = + this.state.current_amount / (this.state.multiplicator);
        this.setState({ result: result.toFixed(2)})
        const currency = ''
        this.setState({currency: '$'})
};

  render() {
    return (
      <div className = "wrapper">
          <div className="Converter">

             <h1>Convert HNL to USD</h1>
             <p>Small application that converts Honduras currency "Lempiras" to United States currency "Dollars"</p>
             <p className = "important">* Last date updated april 10th , 2019</p>

                 <div className="Form">
                    <input name="amount"
                     value = {this.state.current_amount} 
                     type="number"
                     placeholder = "Enter amount in HNL"
                     pattern = "[0-9]*"
                     onChange = {this.updateAmount.bind(this)}
                     />
                    <br />

                    <button onClick = {this.convertHandler}>Convert</button>

                 </div>

                 <div className = "result-container">
                    <h3>{this.state.currency}{this.state.result}</h3>
                 </div>
        </div>
      </div>
    );
  }
}

export default App;
