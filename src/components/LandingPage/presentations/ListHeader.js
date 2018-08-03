import React from "react";
import Proptypes from "prop-types";

const ListHeader = ({ header }) => (
  <div className="list-title">
    <h3>{header}</h3>
  </div>
);

ListHeader.propTypes = {
  header: Proptypes.string
};
export default ListHeader;
