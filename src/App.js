import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Homepage from './Homepage'
import PropsBasicsDemo from './chapters/01-props-and-state/01-props-basics/props-basics-demo'
import CreatingComponents from './chapters/01-props-and-state/02-creating-components/creating-components-demo'
import NestedComponents from './chapters/01-props-and-state/03-nested-components/nested-components-demo'
import ClassComponents from './chapters/01-props-and-state/04-class-components/class-components-demo'
import StateBasics from './chapters/02-state-lifecycle/01-state-basics/state-basics-demo'
import TodoLab from './chapters/02-state-lifecycle/02-todo-lab/demo'
import StopwatchLab from './chapters/02-state-lifecycle/04-stopwatch-lab/demo'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/01-props-and-state/01-props-basics" exact component={PropsBasicsDemo} />
            <Route path="/01-props-and-state/02-creating-components" exact component={CreatingComponents} />
            <Route path="/01-props-and-state/03-nested-components" exact component={NestedComponents} />
            <Route path="/01-props-and-state/04-class-components" exact component={ClassComponents} />
            <Route path="/02-state-lifecycle/01-state-basics" exact component={StateBasics} />
            <Route path="/02-state-lifecycle/02-todo-lab" exact component={TodoLab} />
            <Route path="/02-state-lifecycle/04-stopwatch-lab" exact component={StopwatchLab} />
            <Route render={() => <h2>Sorry, not found!</h2>} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
