import React from 'react';
import "./addToDo.css";

const AddToDo = (props) => {
    return(
        <section className="addtodo__layout--style">
            <label for="addTodoInput" className="addtodo__label--style">Add an Item</label>
            <input id="addTodoInput" onChange={props.newTask} value={props.value} className="addtodo__input--style" type="text" />
            <div className="addtodo__button--container">
                <button aria-label="Click to add task to to do list" onClick={props.onSubmit} className="addtodo__button--style">Add</button>
            </div>
        </section>
    );
}


export default AddToDo;