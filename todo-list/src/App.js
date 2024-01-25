
import './App.css';

function App() {
  return (
    <div className="App">

      <div className="container">
        <h1 className="title">TODO List</h1>
        <form className="todo-form">
          <input class="todo-input" type="text"  />
          <button class="todo-btn" type="submit" >Submit</button>
        </form>
        <div class="todo-list"></div>
<p className="task"> Something</p>
      </div>

    </div>
  );
}

export default App;
