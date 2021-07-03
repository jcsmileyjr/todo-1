import './App.css';
import React, {useState} from 'react';
import Swal from 'sweetalert2';
import AddToDo from './components/addToDo/AddToDo';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [actionList, setActionList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [taskId, setTaskId] = useState(3);

  const updateTodo = (id) => {
    console.log(`Id: ${id}`)
    let currentTodo = actionList.filter(function(todo){
      return todo.id === id;
    })
    setUserInput(currentTodo[0].action);
    deleteTodoItem(id);
  }

  const completeTasks = (id) => {
    const tasks = actionList.map(todo => {
      if(todo.id === id){
        todo.done = !todo.done;
      }
      return todo;
    })
    setActionList(tasks);
  }

  const addUserInput = (e) => {
    setUserInput(e.target.value);
  }

  const onSubmit = () => {
    if(userInput === ""){
      Swal.fire({
        title:'Warning Alert',
        text:"You forgot to write a task",
        timer: 1500,
        icon: 'warning'
      });
      return;
    }
    const nextID = taskId;
    setTaskId(taskId + 1);
    const newTask = {action:userInput, done:false, id: nextID};
    const newTodoList = actionList
    newTodoList.push(newTask);
    setActionList(newTodoList);
    setUserInput("");
  }

  const deleteTodoItem = (id) => {
    let remainingTasks = actionList.filter(function(todo, index, arr){
      return todo.id !== id;
    })
    setActionList(remainingTasks)
  }

  return (
    <article className="App">
      <header>
        <h1 className="header--title__style">To Do List</h1>
      </header>
      <main id="content">
        <AddToDo newTask={addUserInput} value={userInput} onSubmit={onSubmit} />
        <TodoList todos={actionList} editTodo={updateTodo} removeTask={deleteTodoItem} completed={completeTasks} />
      </main>
    </article>
  );
}

export default App;
