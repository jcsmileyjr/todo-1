import React from 'react';
import "./addToDo.css";

const AddToDo = (props) => {
    const handleEnterKeyPress = (e) => {
       if(e.charCode === 13){
           props.onSubmit();
       } 
    }
    return(
        <section className="addtodo__layout--style">
            <label htmlFor="addTodoInput" className="addtodo__label--style">Add an Item</label>
            <input id="addTodoInput" onChange={props.newTask} onKeyPress={(e)=> {handleEnterKeyPress(e)}} value={props.value} className="addtodo__input--style" type="text" />
            <div className="addtodo__button--container">
                <button aria-label="Click to add task to to do list" onClick={props.onSubmit} className="addtodo__button--style">Add</button>
            </div>
        </section>
    );
}


export default AddToDo;