import "./todoList.css";
import TodoItem from "../todoItem/TodoItem";

const TodoList = (props) => {
    const listOfTodoItems = ["a", "b"];
    return(
        <article className="todoList__layout--style">
            {props.todos.map(todo =>(
                <TodoItem action={todo.action} complete={todo.done} todoId={todo.id} />
            ))}
        </article>
    );
}

export default TodoList;