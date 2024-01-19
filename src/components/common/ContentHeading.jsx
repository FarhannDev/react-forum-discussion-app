import React from 'react';
import PropTypes from 'prop-types';

export default function ContentHeading({ title }) {
  return <h1 className="content-heading">{title}</h1>;
}

ContentHeading.propTypes = { title: PropTypes.string.isRequired };
