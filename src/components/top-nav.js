import React from 'react';
import './top-nav.css'

export default function TopNav(props) {
  return (
    <nav className='topnav'>
      <a href='/'>HOME</a>
      <a href='/tank'>TANK</a>
      <a href='/tasks'>TASKS</a>
      <a href='/parameters'>PARAMETERS</a>
      <a href='/database'>DATABASE</a>
      <a href='/info'>INFO</a>
    </nav>
  );
}