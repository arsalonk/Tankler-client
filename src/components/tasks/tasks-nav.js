import React from 'react';
import '../tabs-nav.css';

export default function TasksNav(props) {
  return (
    <nav className='tabnav'>
      <a href='/dashboard/tasks'>Feeding</a>
      <a href='/dashboard/tasks/supplements'>Supplements</a>
      <a href='/dashboard/tasks/testing'>Testing</a>
      <a href='/dashboard/tasks/maintenance'>Maintenance</a>
    </nav>
  );
}