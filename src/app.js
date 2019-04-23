import React from "react";
import { connect } from "react-redux";
import Footer from "./footer.js";
import Header from "./header.js";
import "./design/app.scss";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleIncrement = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter + 1 });
  };

  handleDecrement = e => {
    e.preventDefault();
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h4>{this.state.counter}</h4>
        <a onClick={this.handleIncrement}>Increment +1</a>
        <a onClick={this.handleDecrement}>Decrement -1</a>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
