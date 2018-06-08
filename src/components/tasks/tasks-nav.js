import React from 'react';
import '../tabs-nav.css';
import { NavLink } from 'react-router-dom';
import './task-nav.css';

export default function TasksNav(props) {
  return (
    <nav className='tasknav'>
      <ul id='tasknav' className='tasknav'>
        <a className="icon" onClick={() => props.onClick()}>
          <i className="fa fa-bars"></i>
        </a>
        <li><NavLink exact to='/dashboard/tasks' activeclassname="active">Feeding</NavLink></li>
        <li><NavLink to='/dashboard/tasks/supplements' activeclassname="active">Supplements</NavLink></li>
        <li><NavLink to='/dashboard/tasks/testing' activeclassname="active">Testing</NavLink></li>
        <li><NavLink to='/dashboard/tasks/maintenance' activeclassname="active">Maintenance</NavLink></li>
      </ul>
    </nav>
  );
}