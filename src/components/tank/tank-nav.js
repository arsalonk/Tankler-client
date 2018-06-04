import React from 'react';
import './tank-nav.css';

export default function TankNav(props) {
  return (
    <nav className='tanknav' id='tanknav'>
      <a href='/dashboard/tank'>Fish</a>
      <a href='/dashboard/tank/invertebrates'>Inverts</a>
      <a href='/dashboard/tank/corals'>Corals</a>
    </nav>
  );
}