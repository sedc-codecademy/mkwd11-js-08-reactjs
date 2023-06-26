import { MoviesList } from "./components/MoviesList/MoviesList";
import { MoviesContextProvider } from "./context/MovieContext";

function App() {
  return (
    <MoviesContextProvider>
      <MoviesList />
      {/* <ComponentB />
      <ComponentC /> */}
    </MoviesContextProvider>
  );
}

export default App;
