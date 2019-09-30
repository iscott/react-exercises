import React from 'react'
import { formatSeconds } from './formatSeconds'

class Stopwatch extends React.Component {
  constructor(props) {
    super(props)
    /**
     * ✅  Step 1:
     *     initialize your state here in the constructor.
     */
  }

  /**
   * ✅  Step 2:
   *     Create methods to start and stop the timer using `setInterval`.
   *     ❗️ Be sure to use the arrow sytax for all of your methods:
   *
   *     - startTimer = () => { ... }
   *     - stoptimer = () => { ... }
   */

  /**
   * ✅  Step 3:
   *     Add a componentDidMount method that calls `this.startTimer`
   */

  /**
   * ✅  Step 4:
   *     Display the elapsed time in the render method. Use the `formatSeconds`
   *     function:
   *
   *     <p>Elapsed: {formatSeconds(this.state.elapsed)}</p>
   */

  /**
   * ✅  Step 5:
   *     Toggle the timer
   *     Create a toggleTimer method. It should:
   *
   *     - call this.state.stopTimer() if this.state.running is true
   *     - otherwise, call this.state.startTimer()
   *
   *     Next, add a <button> element to your render()
   *
   *     - Attach `this.toggleTimer` to that button with the `onClick` prop:
   *
   *        <button onClick={this.toggleTimer}>Toggle</button>
   *
   *     Bonus: have this button's text say "Start" when the timer is not running,
   *     and "Stop" when it is
   */

  /**
   * ✅  Step 6:
   *     Cleanup
   *
   *     Add a `componentWillUnmount` method. Have it call `this.stopTimer`
   */

  /**
   * ✅  Step 7 (Bonus):
   *     Laps
   *
   *     Create a `markLap` method. When called, it should:
   *
   *     - update the state of `laps` by appending the current `elapsed` value
   *       to the array. You can use the spread syntax:
   *
   *       this.setState({
   *         laps: [...this.state.laps, this.state.elapsed]
   *       })
   *
   *     Create a button with the text "Lap", and assign `this.markLap` to it
   *     as an event handler with `onClick={this.markLap}`
   *
   *     In your render method, render a list of the laps.
   */

  render() {
    return null
  }
}

export default Stopwatch
