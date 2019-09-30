import React from 'react'

const TodoItem = (props) => {
  const { label } = props
  return <li>{label}</li>
}

class TodoApp extends React.Component {
  state = {
    todos: ['Make a Todo list!'],
  }

  addTodo = (e) => {
    e.preventDefault()
    const newTodo = e.target.querySelector('input').value
    const { todos } = this.state
    this.setState({
      todos: [...todos, newTodo],
    })
    /** */
  }

  reset = () => {
    this.setState({
      todos: [],
    })
  }

  render() {
    const { todos } = this.state

    return (
      <div>
        <h2>My Todos:</h2>
        {todos.map((todo) => (
          <TodoItem key={todo} label={todo} />
        ))}
        <form onSubmit={this.addTodo}>
          <input type="text" name="label" id="label" />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={this.reset}>All done!</button>
      </div>
    )
  }
}

export default TodoApp
