import React from 'react';

export default function TasksNav(props) {
  return (
    <nav className='asd'>
      <a href='/dashboard/tasks/feeding'>Feeding</a>
      <a href='/dashboard/tasks/supplements'>Supplements</a>
      <a href='/dashboard/tasks/testing'>Testing</a>
      <a href='/dashboard/tasks/maintenance'>Maintenance</a>
    </nav>
  );
}