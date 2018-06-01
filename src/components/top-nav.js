import React from 'react';
import './top-nav.css'

export default function TopNav(props) {
  return (
    <nav className='topnav'>
      <a href='/dashboard/home'>HOME</a>
      <a href='/dashboard/tank'>TANK</a>
      <a href='/dashboard/tasks'>TASKS</a>
      <a href='/dashboard/parameters'>PARAMETERS</a>
      <a href='/dashboard/database'>DATABASE</a>
      <a href='/dashboard/info'>INFO</a>
    </nav>
  );
}