/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

export default function Heading({ title }) {
  return <h1 className="auth-content-heading">{title}</h1>;
}

Heading.propTypes = { title: PropTypes.string.isRequired };
