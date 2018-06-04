import React from 'react';

export default function DatabaseNav(props) {
  return (
    <nav className='tabnav'>
      <a href='/dashboard/database'>Fish</a>
      <a href='/dashboard/database/invertebrates'>Invertebrates</a>
      <a href='/dashboard/database/corals'>Corals</a>
    </nav>
  );
}