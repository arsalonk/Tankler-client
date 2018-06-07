import React from 'react';
import { NavLink } from 'react-router-dom';

export default function ParametersNav(props) {
  return (
    <nav className='tabnav'>
      <ul>
        <li><NavLink exact to='/dashboard/parameters' activeclassname="active">Alkalinity</NavLink></li>
        <li><NavLink to='/dashboard/parameters/ammonia' activeclassname="active">Ammonia</NavLink></li>
        <li><NavLink to='/dashboard/parameters/calcium' activeclassname="active">Calcium</NavLink></li>
        <li><NavLink to='/dashboard/parameters/nitrate' activeclassname="active">Nitrate</NavLink></li>
        <li><NavLink to='/dashboard/parameters/pH' activeclassname="active">pH</NavLink></li>
        <li><NavLink to='/dashboard/parameters/phosphate' activeclassname="active">Phosphate</NavLink></li>
        <li><NavLink to='/dashboard/parameters/salinity' activeclassname="active">Salinity</NavLink></li>
        <li><NavLink to='/dashboard/parameters/temperature' activeclassname="active">Temperature</NavLink></li>
      </ul>
    </nav>
  );
}