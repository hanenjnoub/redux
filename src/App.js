import logo from './logo.svg';
import './App.css';
import Tasklist from './Task-list';
import Addtodos from './Addtodos';
function App() {
  
  return (
    <div className="todo">
  
   <Tasklist/>
   <Addtodos/>
    </div>
  );
}

export default App;
