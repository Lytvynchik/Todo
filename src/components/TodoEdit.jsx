// import './TodoEdit.css';
import { useState } from "react";

const TodoEdit = () => {

    cosnt [edit, setEdit] = useState({
		id: null,
		text: ''
	});



    return todos.map((todo, index) => {
        <div className={todo.isCompleted ? 'Todo__item complete' : 'Todo__item'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>{todo.text}</div>
        </div>
    })
};

export default TodoEdit;