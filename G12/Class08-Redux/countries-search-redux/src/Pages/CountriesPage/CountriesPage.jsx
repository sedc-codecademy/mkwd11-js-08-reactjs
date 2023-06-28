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
  return (
    <section className="page CountriesPage">
      <div className="page-heading">
        <h2>Countries</h2>
        <p>You can use this page to search for countries</p>
      </div>
      <div className="content-container">
        <SearchInput />
        <CountryCardContainer />
      </div>
    </section>
  );
};

export default CountriesPage;
