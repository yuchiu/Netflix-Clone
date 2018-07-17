import React from "react";
import { ViewSearch } from "../containers";
import { Nav, Footer } from "../presentations";

const SearchPage = () => (
  <div className="SearchPage-container">
    <Nav />
    <ViewSearch />
    <Footer />
  </div>
);

export default SearchPage;
