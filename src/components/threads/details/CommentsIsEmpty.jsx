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
          alt="no-data"
          loading="lazy"
        />
        <ContentHeading title={title} />
      </div>
    </div>
  );
}

CommentsIsEmpty.propTypes = { title: PropTypes.string.isRequired };
