import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const NotFoundPage = ({
  match: {
    params: { unfoundLocation }
  }
}) => (
  <div className="not-found-page page-wrapper">
    <p>404! The page `{unfoundLocation}` is not found.</p>
  </div>
);

NotFoundPage.propTypes = {
  unfoundLocation: PropTypes.object.isRequired
};

export default NotFoundPage;
