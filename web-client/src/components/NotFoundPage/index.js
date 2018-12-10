import React from "react";
import PropTypes from "prop-types";

import { Nav, Footer } from "@/components/Global";
import Content from "./Content";

const NotFoundPage = ({
  match: {
    params: { unfoundLocation }
  }
}) => (
  <React.Fragment>
    <Nav />
    <main className="not-found-page">
      <Content unfoundLocation={unfoundLocation} />
    </main>
    <Footer />
  </React.Fragment>
);

NotFoundPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default NotFoundPage;
