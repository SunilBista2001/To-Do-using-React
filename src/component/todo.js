import React, { useState, useEffect } from "react";
import "./style.css";

const Todo = () => {
  //Getting local storage data

  const getLocalData = () => {
    const lists = localStorage.getItem("todo");

    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };

  const [inputData, setInputData] = useState("");

  const [items, setItems] = useState(getLocalData());

  //Adding Local Storage
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(items));
  }, [items]);

  //Adding an Items
  const addItems = () => {
    if (inputData.length < 0) {
      alert("Add the Item");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  //Deleting Items
  const deleteItem = (index) => {
    const updatedItem = items.filter((curElem) => {
      return curElem.id !== index;
    });
    setItems(updatedItem);
  };

  //Removing all Items
  const removeItems = () => {
    setItems([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.png" alt="images" />
            <figcaption>Add your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add an Items"
              className="form-control"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={addItems}></i>
          </div>
          <div className="showItems">
            {items.map((curElem, index) => {
              return (
                <div className="eachItem" key={index}>
                  <h3>{curElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(curElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeItems}
            >
              <span>Check List</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
