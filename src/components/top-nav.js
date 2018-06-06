import React from 'react';
import './top-nav.css'

export default function TopNav(props) {
  return (
    <nav className='topnav' id='topnav'>
      <a href="javascript:void(0);" className="icon" onClick={() => props.onClick()}>
        <i className="fa fa-bars"></i>
      </a>
      <a href='/dashboard'>HOME</a>
      <a href='/dashboard/tank'>TANK</a>
      <a href='/dashboard/tasks'>TASKS</a>
      <a href='/dashboard/parameters'>PARAMETERS</a>
      <a href='/dashboard/database'>DATABASE</a>
      <a href='/dashboard/info'>INFO</a>
    </nav>
  );
}