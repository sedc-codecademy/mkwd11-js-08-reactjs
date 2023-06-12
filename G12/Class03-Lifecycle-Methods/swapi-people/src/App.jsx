import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import PeoplePage from "./Pages/PeoplePage/PeoplePage";

function App() {
  const appTitle = "SWAPI People App";

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
      text: "People",
      link: "/people",
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
        <PeoplePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
