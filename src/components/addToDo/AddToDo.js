import React from 'react';
import "./addToDo.css";

const AddToDo = (props) => {
    return(
        <section className="addtodo__layout--style">
            <label className="addtodo__label--style">Add an Item</label>
            <input onChange={props.newTask} value={props.value} className="addtodo__input--style" type="text" />
            <div className="addtodo__button--container">
                <button onClick={props.onSubmit} className="addtodo__button--style">Add</button>
            </div>
        </section>
    );
}


export default AddToDo;