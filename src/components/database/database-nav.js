import React from 'react';
import { NavLink } from 'react-router-dom';

export default function DatabaseNav(props) {
  return (
    <nav className='tanknav'>
      <ul>
        <li><NavLink exact to='/dashboard/database' activeclassname="active">Fish</NavLink></li>
        <li><NavLink to='/dashboard/database/invertebrates' activeclassname="active">Invertebrates</NavLink></li>
        <li><NavLink to='/dashboard/database/corals' activeclassname="active">Corals</NavLink></li>
      </ul>
    </nav>
  );
}