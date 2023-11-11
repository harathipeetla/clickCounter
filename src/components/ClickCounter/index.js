import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
    console.log(1)
  }

  render() {
    const {count} = this.state

    return (
      <div className="counter-container">
        <h1 className="counter-heading">
          The Button has been clicked <br />
          <span className="counter-value">{count}</span> times
        </h1>
        <p className="description">Click the button to increase the count</p>
        <div className="btn-container">
          <button type="button" className="button" onClick={this.OnIncrement}>
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
