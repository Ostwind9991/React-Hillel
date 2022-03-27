import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'


function App() {
  const name='Alexandr';
  const age='27';
  return (
    <div className="App">
      <TodoList name={name} age={age} visible={true}/>
    </div>
  );
}

export default App;
