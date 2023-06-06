import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import PersonInfo from "./Components/PersonInfo/PersonInfo";

function App() {
  const firstName = "John";
  const lastName = "Doe";

  const paragraphColor = "red";
  const paragraphBgColor = "lightgreen";

  const isTodoFinished = true;

  const person = {
    firstName: "Boris",
    lastName: "Borisovski",
  };

  const colors = [
    "lightgreen",
    "lightgray",
    "lightblue",
    "lightpink",
    "lightcoral",
  ];

  // Functional components must always without exception return jsx code
  return (
    // in react we don't use class to define classes on html elements but we use className, always use className
    <div className="App">
      <Header />
      <main>
        {/* First brackets escapes html and the second are javascript object */}
        <p style={{ color: paragraphColor, backgroundColor: paragraphBgColor }}>
          {firstName}
        </p>
        <p>{lastName}</p>
        <p>{person.firstName}</p>
        <p>{person.lastName}</p>
        {/* Conditional rendering of styles */}
        <div
          className="todo"
          style={{
            backgroundColor: isTodoFinished ? "lightgreen" : "lightcoral",
          }}
        >
          Wash the dishes
        </div>
        {/* Rendering arrays in react */}
        <ul>
          {colors.map((color, i) => (
            <li key={color + i} style={{ backgroundColor: color }}>
              {color}
            </li>
          ))}
        </ul>
        <ProductList />
        <PersonInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
