import './App.css';
import React, {useState} from 'react';
import AddToDo from './components/addToDo/AddToDo';
import TodoList from './components/TodoList/TodoList';

function App() {
  const listOfTodos = [
    {action:"Do all those dirty stinky dishes these crazy kids have messsed up!", done:false, id:1},
    {action:"Pay bills", done:true, id:2}
  ]

  const [actionList, setActionList] = useState(listOfTodos);
  const [userInput, setUserInput] = useState("");

  const addUserInput = (e) => {
    setUserInput(e.target.value);
  }

  const onSubmit = () => {
    const nextID = actionList.length + 1;
    const newTask = {action:userInput, done:false, id: nextID};
    const newTodoList = actionList
    newTodoList.push(newTask);
    setActionList(newTodoList);
  }

  return (
    <article className="App">
      <header>
        <h1 className="header--title__style">To Do List</h1>
      </header>
      <main id="content">
        <AddToDo newTask={addUserInput} value={userInput} onSubmit={onSubmit} />
        <TodoList todos={actionList} />
      </main>
    </article>
  );
}

export default App;
