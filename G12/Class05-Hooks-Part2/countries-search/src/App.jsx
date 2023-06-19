import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import CountriesPage from "./Pages/CountriesPage/CountriesPage";

function App() {
  const appTitle = "Countries App";

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
      text: "Countries",
      link: "/countries",
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
        <CountriesPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
