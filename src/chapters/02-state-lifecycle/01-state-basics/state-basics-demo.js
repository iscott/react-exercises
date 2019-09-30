import React from 'react'
import { Demo, Exercise, Final } from '../../../components/Demo'
import Clicker from './state-basics-exercise'
import ClickerSolution from './state-basics-solution'

const PropsBasicsDemo = () => (
  <Demo title="Props Basics">
    <Exercise>
      <Clicker />
    </Exercise>
    <Final>
      <ClickerSolution />
    </Final>
  </Demo>
)

export default PropsBasicsDemo
