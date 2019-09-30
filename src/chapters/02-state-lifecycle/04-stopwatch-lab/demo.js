import React from 'react'
import { Demo, Exercise, Final } from '../../../components/Demo'
import Stopwatch from './exercise'
import StopwatchSolution from './solution'

const StopwatchDemo = () => (
  <Demo title="Stopwatch Lab">
    <Exercise>
      <Stopwatch />
    </Exercise>
    <Final>
      <StopwatchSolution />
    </Final>
  </Demo>
)

export default StopwatchDemo
