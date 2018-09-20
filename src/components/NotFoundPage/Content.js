import React from "react";
import PropTypes from "prop-types";

const Content = ({ unfoundLocation }) => (
  <p>404! The page `{unfoundLocation}` is not found.</p>
);

Content.propTypes = {
  unfoundLocation: PropTypes.string.isRequired
};
export default Content;
