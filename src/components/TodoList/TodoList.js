import "./todoList.css";
import TodoItem from "../todoItem/TodoItem";
import Fade from 'react-reveal/Fade';

const TodoList = (props) => {
    return(
        <article className="todoList__layout--style">
            {props.todos.map(todo =>(
                <Fade left key={todo.id}>
                    <TodoItem action={todo.action} editTodo={props.editTodo} complete={todo.done} todoId={todo.id} todoID={todo.id} completed={props.completed} removeTask={props.removeTask} />
                </Fade>
            ))}
        </article>
    );
}

export default TodoList;