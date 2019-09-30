import React from 'react'

/** ✅ Step 1:
 * Create a class component named TodoApp.
 *
 * Initialize it with the state:
 *
 * state = {
 *   todos: ['Make a Todo list!']
 * }
 *
 * In the render component, add "My Todos:" within an <h2> element,
 * then use Array.map to render out each Todo item. This Todo item can be a
 * simple <li> element, or a simple React component of its own.
 *
 * 💡 Hint: you can access the todos with `this.state.todos`. You can use the `todo`
 *    string itself as the key.
 *
 */

const TodoApp = () => <p>:)</p> // Delete this line after you have created your Clicker class component

/** ✅ Step 2:
 * Add some forms and buttons.
 *
 * - Add a <form> element that wraps:
 *   - an <input /> element
 *   - and a <button type="submit">Add Todo</button> element
 * - Below that, add another button with the label 'All done!'
 *   - <button>All done!</button>
 *
 */

/** ✅ Step 3:
 * Add the addTodo event handler.
 *
 * - First, create a method on the component called `addTodo`
 *   - Remember to use the arrow syntax!
 *   - This method will be passed one argument when it is called.
 *     The value of this argument is an HTML event - an object containing
 *     information about the event that triggered the handler.
 *   - On the first line of this method, add:
 *
 *     e.preventDefault()
 *
 *     Normally, a browser will attempt to submit the form, causing a page refresh.
 *     In our case, we want to handle the form submission on the frontend - so we can use
 *     e.preventDefault() to keep the browser from doing this.
 *
 *   - Next, add this line:
 *
 *     console.log(e.target.querySelector('input').value)
 *
 *   - In your browser, try typing into the input. When you submit, take a look at
 *     the console. You should see the value of what you just typed.
 *
 *     We will cover better ways of getting the value of an input. For now, though,
 *     we can use the native DOM API to get the value out of the input element. If you
 *     are curious, take a look at the output of `console.log(e.target)`
 *
 */

/** ✅ Step 4:
 * Update the component's state
 *
 * Now that we have the value of the input, we can add it to our todo list. Back
 * in the addTodo handler:
 *
 *  - Assign the input value to a variable:
 *
 *    const newTodo = e.target.querySelector('input').value
 *
 *  - Get the current list of todos:
 *
 *    const { todos } = this.state
 *
 *  - Our goal is to add our `newTodo` to the end of this array, and use it to update
 *    the state. We can do this by 'spreading' the values of the previous array
 *    into a new one, as well as adding in the new todo:
 *
 *    const newTodos = [
 *      ...todos,
 *      newTodo
 *    ]
 *
 *    We can then update the component's state with:
 *
 *    this.setState({
 *      todos: newTodos
 *    })
 *
 */

/** ✅ Step 5 (Bonus):
 * Reset the Todos
 *
 * - Create a method that sets the state of `todos` to an empty array,
 *   and bind it as an event handler on an "All done!" button
 */

export default TodoApp
