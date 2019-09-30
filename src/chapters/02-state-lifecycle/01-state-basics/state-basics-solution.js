import React from 'react'

class Clicker extends React.Component {
  state = {
    count: 0,
  }

  increaseCount = () => {
    const { count } = this.state
    this.setState({
      count: count + 1,
    })
  }

  render() {
    return (
      <div>
        <h2>Current Count: {this.state.count}</h2>
        <button onClick={this.increaseCount}>+</button>
      </div>
    )
  }
}

/** Extra Credit Solution */

// class Clicker extends React.Component {
//   state = {
//     count: 0,
//     message: null,
//   }

//   increaseCount = () => {
//     const { count } = this.state
//     const { maxCount } = this.props
//     if (maxCount && count + 1 > maxCount) {
//       this.setState({
//         message: 'Too many clicks!',
//       })
//     } else {
//       this.setState({
//         count: count + 1,
//       })
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h2>Current Count: {this.state.count}</h2>
//         <button onClick={this.increaseCount}>+</button>
//         {this.state.message ? <p>{this.state.message}</p> : null}
//       </div>
//     )
//   }
// }

export default Clicker
