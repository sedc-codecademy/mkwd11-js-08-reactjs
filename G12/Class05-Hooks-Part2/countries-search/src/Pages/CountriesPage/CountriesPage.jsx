import "./CountriesPage.css";
import "../../assets/css/Page.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import CountryCardContainer from "../../Components/CountryCardContainer/CountryCardContainer";
import SearchInput from "../../Components/SearchInput/SearchInput";

const COUNTRIES_ALL_URL = "https://restcountries.com/v3.1/all";
const COUNTRIES_NAME_URL = "https://restcountries.com/v3.1/name";

const CountriesPage = () => {
  const [countries, setCountries] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setCountries(null);
    setErrorMsg(null);

    if (!searchValue) {
      axios.get(COUNTRIES_ALL_URL).then(value => {
        console.log(value);
        setCountries(value.data);
        setErrorMsg(null);
      });
      return;
    }

    axios
      .get(`${COUNTRIES_NAME_URL}/${searchValue}`)
      .then(value => {
        console.log("this is from the search", value.data);

        setCountries(value.data);
        setErrorMsg(null);
      })
      .catch(() => {
        setErrorMsg("No countries found, please try again!");
      });
  }, [searchValue]);

  const updateSearchValue = newValue => {
    setSearchValue(newValue);
  };

  return (
    <section className="page CountriesPage">
      <div className="page-heading">
        <h2>Countries</h2>
        <p>You can use this page to search for countries</p>
      </div>
      <div className="content-container">
        <SearchInput updateSearchValue={updateSearchValue} />
        <CountryCardContainer countries={countries} errorMsg={errorMsg} />
      </div>
    </section>
  );
};

export default CountriesPage;
