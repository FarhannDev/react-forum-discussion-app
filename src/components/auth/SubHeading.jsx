import React from 'react';
import PropTypes from 'prop-types';

export default function SubHeading({ title }) {
  return <h3 className="auth-content-subheading">{title}</h3>;
}

SubHeading.propTypes = { title: PropTypes.string.isRequired };
