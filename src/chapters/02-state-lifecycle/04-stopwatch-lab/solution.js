import React from 'react'
import { formatSeconds } from './formatSeconds'

class Stopwatch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      elapsed: 0,
      laps: [],
      running: false,
    }
  }

  /* or, remove the constructor and assign the state directly: */

  // state = {
  //   elapsed: 0,
  //   laps: [],
  //   running: false,
  // }

  componentDidMount = () => {
    this.startTimer()
  }

  componentWillUnmount = () => {
    this.stopTimer()
  }

  startTimer = () => {
    this.timerId = setInterval(this.increment, 10)
    this.setState({
      running: true,
    })
  }

  increment = () => {
    const { elapsed } = this.state
    this.setState({
      elapsed: elapsed + 1,
    })
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({
      running: false,
    })
  }

  toggleTimer = () => {
    const { running } = this.state
    if (running) {
      this.stopTimer()
    } else {
      this.startTimer()
    }
  }

  addLap = () => {
    /* */
    const { laps, elapsed } = this.state
    this.setState({
      laps: [...laps, elapsed],
    })
  }

  render() {
    const { running, elapsed, laps } = this.state

    return (
      <div>
        <button onClick={this.toggleTimer}>{running ? 'Stop' : 'Start'}</button>
        <button onClick={this.addLap}>Lap</button>
        <div>
          <p>Elapsed:</p> <pre>{formatSeconds(elapsed)}</pre>
        </div>
        <hr />
        {laps.length ? (
          <div>
            <p>Laps:</p>
            {laps.map((lap) => (
              <pre key={lap}>{formatSeconds(lap)}</pre>
            ))}
          </div>
        ) : null}
      </div>
    )
  }
}

export default Stopwatch
