import React from 'react'
import SearchBox from './SearchBox'
import Trends from './Trends'
import SuggestedContacts from './SuggestedContacts'

const SideBar = () => {
  return (
    <div className='side-bar-container'>
      <div className='side-bar-items-container'>
        <SearchBox />
        <Trends />
        <SuggestedContacts />
      </div>
    </div>
  )
}

export default SideBar
