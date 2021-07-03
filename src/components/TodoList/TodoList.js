import "./todoList.css";
import TodoItem from "../todoItem/TodoItem";

const TodoList = (props) => {
    return(
        <article className="todoList__layout--style">
            {props.todos.map(todo =>(
                <TodoItem action={todo.action} complete={todo.done} todoId={todo.id} todoID={todo.id} removeTask={props.removeTask} key={todo.id} />
            ))}
        </article>
    );
}

export default TodoList;