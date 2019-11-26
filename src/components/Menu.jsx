import React from 'react';
import PropTypes from 'prop-types';

const ITEMS = [
  { name: 'Home', icon: '🏠' },
  { name: 'Explore', icon: '#️⃣' },
  { name: 'Notifications', icon: '🔔' },
  { name: 'Messages', icon: '✉️' },
  { name: 'Profile', icon: '🙍‍♂️' },
];

const MenuItem = ({ name, icon }) => (
  <div className="menu-item">
    <span> {icon} </span>
    <span> {name} </span>
  </div>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const Menu = () => (
  <div className="menu-container">
    <div className="menu-items-container">
      {ITEMS.map(({ name, icon }) => <MenuItem key={name} name={name} icon={icon} />)}
    </div>
  </div>
);

export default Menu;
