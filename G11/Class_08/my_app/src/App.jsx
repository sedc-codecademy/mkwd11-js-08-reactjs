import { Counter } from "./components/Counter/Counter";
import { Provider } from "react-redux";
import store from "./store";
import { AddMovie } from "./components/AddMovie/AddMovie";
import { Movies } from "./components/Movies/Movies";

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />

        <br />
        <hr />
        <AddMovie />

        <Movies />
      </Provider>
    </>
  );
}

export default App;
