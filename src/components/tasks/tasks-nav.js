import React from 'react';
import '../tabs-nav.css';
import { NavLink } from 'react-router-dom';

export default function TasksNav(props) {
  return (
    <nav className='tabnav'>
      <ul>
        <li><NavLink exact to='/dashboard/tasks' activeclassname="active">Feeding</NavLink></li>
        <li><NavLink to='/dashboard/tasks/supplements' activeclassname="active">Supplements</NavLink></li>
        <li><NavLink to='/dashboard/tasks/testing' activeclassname="active">Testing</NavLink></li>
        <li><NavLink to='/dashboard/tasks/maintenance' activeclassname="active">Maintenance</NavLink></li>
      </ul>
    </nav>
  );
}