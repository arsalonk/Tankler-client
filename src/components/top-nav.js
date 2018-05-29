import React from 'react';

export default function TopNav(props) {
  return (
    <nav>
      <a href='/'>HOME</a>
      <a href='/tank'>TANK</a>
      <a href='/tasks'>TASKS</a>
      <a href='/parameters'>PARAMETERS</a>
      <a href='/database'>DATABASE</a>
      <a href='/info'>INFO</a>
    </nav>
  );
}