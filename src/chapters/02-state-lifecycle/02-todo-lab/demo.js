import React from 'react'
import { Demo, Exercise, Final } from '../../../components/Demo'
import Todo from './exercise'
import TodoSolution from './solution'

const PropsBasicsDemo = () => (
  <Demo title="Props Basics">
    <Exercise>
      <Todo />
    </Exercise>
    <Final>
      <TodoSolution />
    </Final>
  </Demo>
)

export default PropsBasicsDemo
