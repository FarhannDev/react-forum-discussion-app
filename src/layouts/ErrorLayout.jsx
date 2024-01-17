/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

export default function ErrorLayout({ children }) {
  return <main className="main-content-error">{children}</main>;
}

ErrorLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
