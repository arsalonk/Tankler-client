import React from 'react';
import './tank-nav.css';
import { NavLink } from 'react-router-dom';

export default function TankNav(props) {
  return (
    <nav className='tanknav' id='tanknav'>
      <ul>
        <li><NavLink exact to='/dashboard/tank' activeclassname="active">Fish</NavLink></li>
        <li><NavLink to='/dashboard/tank/invertebrates' activeclassname="active">Inverts</NavLink></li>
        <li><NavLink to='/dashboard/tank/corals' activeclassname="active">Corals</NavLink></li>
      </ul>
    </nav>
  );
}