/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import ContentHeading from './ContentHeading';

export default function SearchBarEmpty({ title }) {
  return (
    <div className="page-notfound-container">
      <div className="mx-auto text-center">
        <img
          src="/images/search_empty.png"
          className="img-fluid page-notfound-images"
          alt="logo error"
        />
        <ContentHeading title={title} />
      </div>
    </div>
  );
}

SearchBarEmpty.propTypes = { title: PropTypes.string.isRequired };
