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
  <div>
    <span>
      {name}
    </span>
    <span>
      {icon}
    </span>
  </div>
);

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const Menu = () => (
  <div>
    {ITEMS.map(({ name, icon }) => <MenuItem name={name} icon={icon} />)}
  </div>
);

export default Menu;
