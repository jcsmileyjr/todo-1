import React from 'react';
import "./addToDo.css";

const AddToDo = () => {
    return(
        <section className="addtodo__layout--style">
            <label className="addtodo__label--style">Add an Item</label>
            <input className="addtodo__input--style" type="text" />
            <div className="addtodo__button--container">
                <button className="addtodo__button--style">Add</button>
            </div>
        </section>
    );
}


export default AddToDo;