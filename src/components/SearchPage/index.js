import React from "react";
import ViewSearch from "./ViewSearch";
import { Nav, Footer } from "@/components/Global";

const SearchPage = () => (
  <div className="SearchPage-container">
    <Nav />
    <ViewSearch />
    <Footer />
  </div>
);

export default SearchPage;
