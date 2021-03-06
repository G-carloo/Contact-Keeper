import React from "react";
import PropTypes from "prop-types";
import { Links } from "react-router-dom";

const Navbar = ({ title, icon }) => {
  return (
    <div className='navabar bg-primary'>
      <h1>
        <i className={icon} />
        {title}
      </h1>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
