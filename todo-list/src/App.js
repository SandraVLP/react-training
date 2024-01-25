
import './App.css';
import {useState} from 'react'

function App() {
  const [inputValue, setInputValue] = useState('');
 
  /* The handleChange() function to set a new state for input */
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="App">

      <div className="container">
        <h1 className="title">TODO List</h1>
        <form className="todo-form">
          <input className="todo-input" type="text"  value={inputValue} onChange={handleChange}/>
          <button className="todo-btn" type="submit" >Submit</button>
        </form>
        <div className="todo-list"></div>
<p className="task"> Something</p>
      </div>

    </div>
  );
}

export default App;
