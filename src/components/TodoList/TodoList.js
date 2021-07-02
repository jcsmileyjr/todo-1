import "./todoList.css";
import TodoItem from "../todoItem/TodoItem";

const TodoList = () => {
    const listOfTodoItems = ["a", "b"];
    return(
        <article className="todoList__layout--style">
            {listOfTodoItems.map(todo =>(
                <TodoItem />
            ))}
        </article>
    );
}

export default TodoList;