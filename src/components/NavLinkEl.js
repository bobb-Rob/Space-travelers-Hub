import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLinkEl = ({ name, path, handleClick }) => {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <NavLink
      to={path}
      className="nav-link"
      style={({ isActive }) => (isActive ? activeStyle : undefined)}
      onClick={handleClick}
    >
      {name}
    </NavLink>
  );
};

export default NavLinkEl;

NavLinkEl.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

NavLinkEl.defaultProps = {
  handleClick: () => {},
};
