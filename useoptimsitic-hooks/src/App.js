import { useState, useOptimistic } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [optimisticTodos, setOptimisticTodos] = useOptimistic(
    todos,
    (oldTodos, newTodo) => [...oldTodos, { text: newTodo, pending: true }]
  );

  const handleAddTodo = async (formData) => {
    const newTodo = formData.get("todo");

    setOptimisticTodos(newTodo);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setTodos((currentTodos) => [
      ...currentTodos,
      { text: newTodo, pending: false },
    ]);
  };

  return (
    <div>
      <form action={handleAddTodo}>
        <input type="text" name="todo" placeholder="Enter todo..." />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {optimisticTodos.map((todo, index) => (
          <li key={index}>
            {todo.text}
            {todo.pending && <span> (Adding...)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
