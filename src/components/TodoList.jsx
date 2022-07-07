// import './TodoList.css';

const TodoList = ({ todos, setTodos}) => {

    const removeTodo = (id) => {
		setTodos(todos => todos.filter(item => item.id !== id))
		console.log(id);
	}

    return (
        <ul className="Todo__list">
            {
                todos.map((todo, index) =>
                    <li className="Todo__item" key={index}>
                        <p className="Todo__item__text">{todo.text}</p>
                        <div className="btn-block">
                            <button onClick={() => removeTodo(todo.id)}>remove</button>
                            <button>edit</button>
                        </div>
                    </li>)
            }
        </ul>
    );
};

export default TodoList;