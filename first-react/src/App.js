import { useState, useEffect } from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const [toDoDB, setToDoDB] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") return;
    setToDoDB((currentDB) => [toDo, ...currentDB]);
    setToDo("");
  };
  
  useEffect(()=>console.log(toDoDB), [toDoDB]);

  return (
    <div>
      <h1>My To Do</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text"></input>
        <button type="submit">Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDoDB.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
