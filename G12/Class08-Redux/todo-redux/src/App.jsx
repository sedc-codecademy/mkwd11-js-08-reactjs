import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import TodoPage from "./Pages/TodoPage/TodoPage";

function App() {
  const appTitle = "Todo App";

  const navbarLinkData = [
    {
      text: "Home",
      link: "/home",
    },
    {
      text: "About Us",
      link: "/about-us",
    },
    {
      text: "Todos",
      link: "/todos",
    },
    {
      text: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="App">
      <Header navbarLinkData={navbarLinkData} appTitle={appTitle} />
      <main>
        <TodoPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
