import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  const appTitle = "THEME";

  const navbarLinkData = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/about",
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer>
        <strong>This app was built using the context api</strong>
      </Footer>
    </div>
  );
}

export default App;
