import { useState } from "react";
import './TodoForm.css';
import TodoList from "./TodoList";

const TodoForm = () => {

	const [todos, setTodos] = useState([]);
	const [input, setInput] = useState('');

	const addTodos = (value) => {
		if (value) {
			const newTodos = {
				id: new Date().toISOString(),
				text: value,
				completed: false,
			}
			setTodos([...todos, newTodos])
			console.log(todos);
		}
	}

	const handlerClick = (e) => {
		e.preventDefault();
		addTodos(input)
	}

	return (
		<div className="Todo">
			<h1>Todo App</h1>
			<form className="Todo__form" onSubmit={handlerClick}>
				<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
				<button>Add Todo</button>
			</form>
			<TodoList todos={ todos } setTodos={setTodos}/>
		</div>
	);
}

export default TodoForm;