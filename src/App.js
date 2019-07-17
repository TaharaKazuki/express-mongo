import React, { Component } from 'react';

const App = () => (<Counter />)

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  handlePlusButton = () => {
    console.info('通過')
    this.setState({ count: this.state.count + 1 })
  }
  render() {
    return (
      <React.Fragment>
        <div>counter:{ this.state.count }</div>
        <button onClick={this.handlePlusButton}>count+1</button>
      </React.Fragment>
    )
  }
}
export default App;
