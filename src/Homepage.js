import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => (
  <div>
    <div>
      <h3>Chapter 1: Components & Props</h3>
      <Link to="01-props-and-state/01-props-basics">Lesson 1: Props Basics</Link>
      <br />
      <Link to="01-props-and-state/02-creating-components">Lesson 2: Creating Components</Link>
      <br />
      <Link to="01-props-and-state/03-nested-components">Lesson 3: Nested Components</Link>
      <br />
      <Link to="01-props-and-state/04-class-components">Lesson 4: Class Components</Link>
      <h3>Chapter 2: State & Lifecycle</h3>
      <Link to="02-state-lifecycle/01-state-basics">Lesson 1: State Basics</Link>
      <br />
      <Link to="02-state-lifecycle/02-todo-lab">Lab: Todo List</Link>
      <br />
      <Link to="02-state-lifecycle/04-stopwatch-lab">Lab: Stopwatch</Link>
      <br />
    </div>
  </div>
)

export default Homepage
