import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  const appTitle = "Props App";

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
      text: "Products",
      link: "/products",
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
        <ProductPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
