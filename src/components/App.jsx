import React,{useState} from "react";
import List from "./list";

function App() {
  const [inputText,setInputtext]=useState("");
  const [items,setItems]=useState([]);

  function handleChange(event){
    const newValue=event.target.value;
    setInputtext(newValue);
  }

  function handleClick(){
    setItems((prevItems) =>{
      return [...prevItems, inputText];
    })

    setInputtext("");
  }

  function deleteItem(id){

    setItems((prevItems) => {
      return prevItems.filter(
        (item,index) => {
              return index !==id;
        }
      )
    })
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText}/>
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem,index) => 
             <List
               key={index}
               id={index}
               text={todoItem}
               onChecked={deleteItem}
              />
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
