import './App.css';
import Header from './Components/Header/Header';
import Todos from './Components/Todos/Todos';
import Counter from './Components/Counter/Counter';

function App() {
  return (
    <div className="container">
      <Header />
      <Todos message="Today todos list:" description="This is the selection of todays todos"  />
      <Counter title="Title for class counter component" />
    </div>
  );
}

export default App;
