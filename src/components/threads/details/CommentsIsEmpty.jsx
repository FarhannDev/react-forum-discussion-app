/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import PropTypes from 'prop-types'; // ES6
import ContentHeading from '../../common/ContentHeading';

export default function CommentsIsEmpty({ title }) {
  return (
    <div className="comment-empty-container">
      <div className="mx-auto text-center">
        <img
          src="/images/no_data.png"
          className="img-fluid comment-empty-images"
        />
        <ContentHeading title={title} />
      </div>
    </div>
  );
}

CommentsIsEmpty.propTypes = { title: PropTypes.string.isRequired };
