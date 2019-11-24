import React from 'react';
import SearchBox from './SearchBox';
import Trends from './Trends';
import SuggestedContacts from './SuggestedContacts';

const SideBar = () => (
  <div>
    <SearchBox />
    <Trends />
    <SuggestedContacts />
  </div>
);

export default SideBar;
