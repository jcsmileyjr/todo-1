import './App.css';
import AddToDo from './components/addToDo/AddToDo';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <article className="App">
      <header>
        <h1 className="header--title__style">To Do List</h1>
      </header>
      <main id="content">
        <AddToDo />
        <TodoList />
      </main>
    </article>
  );
}

export default App;
